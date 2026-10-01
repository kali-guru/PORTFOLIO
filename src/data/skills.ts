/**
 * Skills data — edit freely. Grouped for the Skills section.
 * Keep the lists honest: only include tools you have actually used.
 */

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'offensive',
    title: 'Offensive Security',
    description: 'Testing how systems break — safely and with authorization.',
    skills: [
      'Web Application Security',
      'Network Penetration Testing',
      'Vulnerability Assessment',
      'Reconnaissance',
      'Security Testing Methodology',
      'Exploit Fundamentals',
    ],
  },
  {
    id: 'defensive',
    title: 'Defensive Security',
    description: 'Making systems resilient and detectable when they fail.',
    skills: [
      'Threat Modeling',
      'Security Monitoring',
      'Incident Response Basics',
      'System Hardening',
      'Secure Configuration',
    ],
  },
  {
    id: 'technologies',
    title: 'Technologies',
    description: 'Day-to-day building blocks.',
    skills: ['Linux', 'Python', 'Bash', 'JavaScript / TypeScript', 'Git', 'Docker', 'REST APIs'],
  },
  {
    id: 'tools',
    title: 'Security Tools',
    description: 'Replace with tools you have actually used in labs or authorized work.',
    skills: ['Burp Suite', 'Nmap', 'Wireshark', 'OWASP ZAP', 'ffuf', 'sqlmap', 'Metasploit'],
  },
];
