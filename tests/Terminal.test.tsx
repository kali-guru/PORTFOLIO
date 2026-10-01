import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Terminal from '../src/components/Terminal';

const LINES = [
  { command: 'whoami', output: ['prashant-gurung'] },
  { command: 'status', output: ['open_to_opportunities'] },
];

describe('Terminal', () => {
  it('auto-runs the first command and types its output', async () => {
    render(<Terminal lines={LINES} />);
    expect(await screen.findByText(/prashant-gurung/)).toBeInTheDocument();
  });

  it('runs a clicked command and clears the session', async () => {
    const user = userEvent.setup();
    render(<Terminal lines={LINES} />);
    await screen.findByText(/prashant-gurung/);

    await user.click(screen.getByRole('button', { name: 'status' }));
    expect(await screen.findByText(/open_to_opportunities/)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'clear' }));
    expect(screen.queryByText(/open_to_opportunities/)).not.toBeInTheDocument();
  });
});
