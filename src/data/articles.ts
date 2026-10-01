/**
 * Research / writeup index. Static data only — no CMS, no backend.
 * Each entry links to an external URL (blog, gist, PDF) you control.
 */

export interface Article {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  url: string;
}

export const articles: Article[] = [
  {
    title: '[Writeup Title — e.g. Notes on Reflected XSS in Lab Apps]',
    slug: 'reflected-xss-lab-notes',
    date: '2025-01-15',
    description:
      'Placeholder: how the vulnerability class works in a local lab, how to test for it safely, and how to mitigate it.',
    tags: ['web-security', 'xss', 'lab-notes'],
    url: 'https://[YOUR BLOG]/reflected-xss-lab-notes',
  },
  {
    title: '[CTF Writeup Title — e.g. Web Challenge Walkthrough]',
    slug: 'ctf-web-challenge-walkthrough',
    date: '2024-11-02',
    description:
      'Placeholder: recon steps, exploitation path, dead ends, and defensive takeaways from an authorized CTF challenge.',
    tags: ['ctf', 'web', 'writeup'],
    url: 'https://[YOUR BLOG]/ctf-web-challenge-walkthrough',
  },
  {
    title: '[Research Note — e.g. Reading Nmap Output Like a Defender]',
    slug: 'reading-nmap-like-a-defender',
    date: '2024-09-10',
    description:
      'Placeholder: what common scan results mean, which exposures matter most, and how to prioritize remediation.',
    tags: ['network', 'nmap', 'defense'],
    url: 'https://[YOUR BLOG]/reading-nmap-like-a-defender',
  },
];
