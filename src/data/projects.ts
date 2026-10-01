/**
 * Project showcase data. All entries are placeholders — replace with
 * your own authorized lab work, coursework, or open-source projects.
 * Do not fabricate impact, clients, or vulnerability discoveries.
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  approach: string;
  category: string;
  technologies: string[];
  securityConcepts: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'web-sec-lab',
    name: 'Web Application Security Lab',
    description:
      'A local lab environment for practicing common web vulnerabilities (OWASP Top 10) against intentionally vulnerable targets.',
    problem: 'Needed a safe, repeatable place to learn web attack and defense fundamentals.',
    approach:
      'Built Docker-based targets, documented test cases per vulnerability class, and recorded mitigations for each finding.',
    category: 'Web Security',
    technologies: ['Docker', 'Linux', 'Burp Suite', 'OWASP ZAP'],
    securityConcepts: ['OWASP Top 10', 'Input validation', 'Session management'],
    githubUrl: 'https://github.com/kali-guru/web-sec-lab',
  },
  {
    id: 'recon-toolkit',
    name: 'Automated Reconnaissance Toolkit',
    description:
      'Small Python/Bash toolkit that chains subdomain enumeration, port scanning, and HTTP probing for authorized targets.',
    problem: 'Manual recon steps were slow and inconsistent across engagements in lab exercises.',
    approach:
      'Wrapped standard tools with a thin CLI, structured JSON output, and explicit scope allow-listing so out-of-scope hosts are never touched.',
    category: 'Automation',
    technologies: ['Python', 'Bash', 'Nmap'],
    securityConcepts: ['Reconnaissance', 'Scope control', 'Automation'],
    githubUrl: 'https://github.com/kali-guru/recon-toolkit',
  },
  {
    id: 'vuln-assessment-framework',
    name: 'Vulnerability Assessment Framework',
    description:
      'Checklist-driven assessment workflow with severity-rating guidance and report templates.',
    problem: 'Lab reports were inconsistent and hard to compare over time.',
    approach:
      'Standardized on CVSS-oriented severity notes, evidence capture, and remediation-first recommendations.',
    category: 'Assessment',
    technologies: ['Markdown', 'Python', 'Git'],
    securityConcepts: ['Vulnerability assessment', 'Risk rating', 'Reporting'],
    githubUrl: 'https://github.com/kali-guru/vuln-assessment-framework',
  },
  {
    id: 'monitoring-lab',
    name: 'Security Monitoring Lab',
    description:
      'A small log-shipping and detection playground to practice writing and tuning basic detection rules.',
    problem: 'Wanted hands-on intuition for what attackers look like from the defender side.',
    approach:
      'Forwarded lab host logs to a central store, wrote detections for common attack patterns, and tuned out noise.',
    category: 'Defense',
    technologies: ['Linux', 'Docker', 'Syslog'],
    securityConcepts: ['Detection engineering', 'Log analysis', 'Threat modeling'],
    githubUrl: 'https://github.com/kali-guru/monitoring-lab',
  },
  {
    id: 'ctf-writeups',
    name: 'CTF Writeups',
    description:
      'Public notes on Capture The Flag challenges solved — methodology, dead ends, and lessons learned.',
    problem: 'Knowledge from CTFs faded quickly without written records.',
    approach:
      'Published structured writeups: recon, exploitation path, mitigation, and what to try differently next time.',
    category: 'Research',
    technologies: ['Markdown', 'Python', 'Linux'],
    securityConcepts: ['Web exploitation', 'Forensics basics', 'Cryptography basics'],
    githubUrl: 'https://github.com/kali-guru/ctf-writeups',
  },
  {
    id: 'secure-pipeline',
    name: 'Secure DevOps Pipeline',
    description:
      'Reference CI pipeline showing dependency scanning, secret detection, container scanning, and static analysis gates.',
    problem: 'Demo projects shipped without any security checks in CI.',
    approach:
      'Added non-blocking-then-blocking gates, pinned base images, and documented each control in SECURITY.md.',
    category: 'DevSecOps',
    technologies: ['GitHub Actions', 'Docker', 'TypeScript'],
    securityConcepts: ['DevSecOps', 'Supply-chain basics', 'Secure defaults'],
    githubUrl: 'https://github.com/kali-guru/secure-pipeline',
  },
];
