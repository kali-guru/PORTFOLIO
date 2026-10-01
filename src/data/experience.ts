/**
 * Experience timeline placeholders. Replace with real entries only —
 * never invent employers, titles, or dates.
 */

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    organization: '[Company / Organization]',
    role: '[Role — e.g. Security Intern]',
    period: '2024 — Present',
    location: '[City, Country / Remote]',
    description:
      'Placeholder: one or two sentences about responsibilities in authorized security work, labs, or coursework.',
    tags: ['penetration-testing', 'reporting'],
  },
  {
    id: 'exp-2',
    organization: '[Freelance / Lab / University]',
    role: '[Role — e.g. Security Research Assistant]',
    period: '2023 — 2024',
    location: '[City, Country / Remote]',
    description:
      'Placeholder: what you built, tested, or researched — keep it verifiable and specific.',
    tags: ['web-security', 'automation'],
  },
  {
    id: 'exp-3',
    organization: '[Education / Training]',
    role: '[Program — e.g. B.Sc. Computer Science]',
    period: '2022 — 2026',
    location: '[University / Self-study]',
    description:
      'Placeholder: relevant coursework, labs, CTF participation, or independent study focus areas.',
    tags: ['fundamentals', 'ctf'],
  },
];
