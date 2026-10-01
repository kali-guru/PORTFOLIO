import { useEffect, useRef, useState } from 'react';
import type { TerminalLine } from '../data/profile';

interface Props {
  title?: string;
  lines: TerminalLine[];
}

interface Entry {
  command: string;
  full: string;
  shown: string;
  done: boolean;
}

const TICK_MS = 24;
const CHARS_PER_TICK = 3;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Interactive illustrative terminal. Commands are clickable buttons that
 * "run" preconfigured output with a typewriter effect. Not a live shell —
 * every command and output comes from static data.
 */
export default function Terminal({ title = 'prashant@portfolio: ~', lines }: Props) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  const running = entries.some((e) => !e.done);

  function runCommand(command: string) {
    if (running) return;
    const line = lines.find((l) => l.command === command);
    if (!line) return;
    const full = line.output.join('\n');
    if (prefersReducedMotion()) {
      setEntries((prev) => [...prev, { command, full, shown: full, done: true }]);
    } else {
      setEntries((prev) => [...prev, { command, full, shown: '', done: false }]);
    }
  }

  function clear() {
    setEntries([]);
  }

  // Run the first command on mount so the terminal is never empty.
  useEffect(() => {
    if (lines.length > 0) {
      const first = lines[0];
      const full = first.output.join('\n');
      if (prefersReducedMotion()) {
        setEntries([{ command: first.command, full, shown: full, done: true }]);
      } else {
        setEntries([{ command: first.command, full, shown: '', done: false }]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Typewriter: advance the oldest unfinished entry.
  useEffect(() => {
    const idx = entries.findIndex((e) => !e.done);
    if (idx === -1) return;
    const id = window.setInterval(() => {
      setEntries((prev) =>
        prev.map((entry, i) => {
          if (i !== idx) return entry;
          const shown = entry.full.slice(0, entry.shown.length + CHARS_PER_TICK);
          return { ...entry, shown, done: shown.length >= entry.full.length };
        })
      );
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [entries]);

  // Keep the latest output in view (guarded: not implemented in jsdom).
  useEffect(() => {
    const el = bodyRef.current;
    if (el && typeof el.scrollTo === 'function') {
      el.scrollTo({ top: el.scrollHeight });
    }
  }, [entries]);

  return (
    <div
      className="terminal"
      role="figure"
      aria-label="Interactive terminal illustration (not a live shell — commands show preset text)"
    >
      <div className="terminal-bar">
        <span className="terminal-dot r" aria-hidden="true" />
        <span className="terminal-dot y" aria-hidden="true" />
        <span className="terminal-dot g" aria-hidden="true" />
        <span className="terminal-title">{title}</span>
        <button
          type="button"
          className="terminal-clear"
          onClick={clear}
          disabled={entries.length === 0}
        >
          clear
        </button>
      </div>
      <div className="terminal-body" ref={bodyRef} aria-live="polite">
        {entries.map((entry, i) => (
          <div key={`${entry.command}-${i}`}>
            <div className="term-line">
              <span className="term-prompt">$ </span>
              <span>{entry.command}</span>
            </div>
            <div className="term-line term-output">{entry.shown}</div>
          </div>
        ))}
        {!running && (
          <div className="term-line" aria-hidden="true">
            <span className="term-prompt">$ </span>
            <span className="term-cursor">▍</span>
          </div>
        )}
      </div>
      <div className="terminal-commands" role="group" aria-label="Try a command">
        <span className="terminal-hint" aria-hidden="true">
          try:
        </span>
        {lines.map((line) => (
          <button
            key={line.command}
            type="button"
            className="term-command"
            onClick={() => runCommand(line.command)}
            disabled={running}
          >
            {line.command}
          </button>
        ))}
      </div>
    </div>
  );
}
