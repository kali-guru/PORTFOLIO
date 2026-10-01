import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from '../src/components/Projects';

describe('Projects', () => {
  it('renders filter buttons and all projects by default', () => {
    render(<Projects />);
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Showing 6 of 6 projects')).toBeInTheDocument();
    expect(screen.getByText(/web application security lab/i)).toBeInTheDocument();
  });

  it('filters projects by category', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole('button', { name: 'Automation' }));
    expect(screen.getByText('Showing 1 of 6 projects')).toBeInTheDocument();
    expect(screen.getByText(/automated reconnaissance toolkit/i)).toBeInTheDocument();
    expect(screen.queryByText(/web application security lab/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'All' }));
    expect(screen.getByText('Showing 6 of 6 projects')).toBeInTheDocument();
  });
});
