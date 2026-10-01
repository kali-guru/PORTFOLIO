/**
 * Central profile data for Prashant Gurung.
 *
 * Remaining [PLACEHOLDER] values (location, email, LinkedIn, blog) should be
 * replaced with real information. Do not invent employment, certifications,
 * CVEs, or awards.
 */

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  statement: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  blogUrl: string;
  availability: string;
}

export interface TerminalLine {
  command: string;
  output: string[];
}

function env(name: string, fallback: string): string {
  const value = (import.meta.env?.[name] as string | undefined)?.trim();
  return value && value.length > 0 ? value : fallback;
}

export const profile: Profile = {
  name: 'Prashant Gurung',
  role: 'Cybersecurity Practitioner',
  location: '[YOUR LOCATION]',
  tagline:
    'Cybersecurity practitioner focused on understanding how systems fail — and how to make them resilient.',
  statement:
    'I work across offensive and defensive security: web application testing, vulnerability assessment, Linux and network fundamentals, and security automation. This site collects my projects, learning notes, and research writeups.',
  email: env('VITE_CONTACT_EMAIL', '[YOUR EMAIL]'),
  github: 'kali-guru',
  githubUrl: env('VITE_GITHUB_URL', 'https://github.com/kali-guru'),
  linkedin: '[YOUR LINKEDIN]',
  linkedinUrl: env('VITE_LINKEDIN_URL', 'https://www.linkedin.com/'),
  blogUrl: 'https://[YOUR BLOG]',
  availability: 'Open to internships, junior security roles, and collaborative research.',
};

export const siteUrl: string = env('VITE_SITE_URL', 'https://example.com').replace(/\/+$/, '');

/**
 * Interactive hero-terminal content. Displayed as an illustrative helper —
 * not a live shell. Edit freely; commands render as clickable buttons.
 */
export const terminalLines: TerminalLine[] = [
  { command: 'whoami', output: ['prashant-gurung', 'cybersecurity-practitioner'] },
  {
    command: 'focus',
    output: ['web-security', 'penetration-testing', 'security-automation'],
  },
  {
    command: 'contact',
    output: ['github.com/kali-guru', '[YOUR EMAIL]'],
  },
  { command: 'status', output: ['open_to_opportunities'] },
];
