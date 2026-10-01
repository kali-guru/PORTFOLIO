import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('Portfolio App', () => {
  it('renders the hero with name, title, and calls to action', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /prashant gurung/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    for (const section of [
      'about',
      'skills',
      'projects',
      'research',
      'experience',
      'certifications',
      'contact',
    ]) {
      expect(document.getElementById(section)).not.toBeNull();
    }
  });

  it('provides accessible primary navigation', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: /primary/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThan(0);
  });

  it('toggles the color theme and persists the preference', async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole('button', { name: /switch to .* theme/i });
    const initial = document.documentElement.getAttribute('data-theme');
    await user.click(toggle);
    const next = document.documentElement.getAttribute('data-theme');
    expect(next).not.toBeNull();
    expect(next).not.toBe(initial);
    expect(['dark', 'light']).toContain(window.localStorage.getItem('portfolio-theme'));
  });

  it('links to the owner GitHub profile', () => {
    render(<App />);
    const links = screen.getAllByRole('link', { name: /github/i });
    expect(links.some((l) => l.getAttribute('href') === 'https://github.com/kali-guru')).toBe(true);
  });

  it('renders project and research data without runtime errors', () => {
    render(<App />);
    expect(screen.getByText(/web application security lab/i)).toBeInTheDocument();
    expect(screen.getAllByText(/placeholder/i).length).toBeGreaterThan(0);
  });
});
