/**
 * Certification placeholders. List only certifications you actually hold.
 * Never invent certifications, issuers, or credential IDs.
 */

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: '[Certification Name]',
    issuer: '[Issuing Organization]',
    year: '[Year]',
    credentialUrl: 'https://example.com/verify/[CREDENTIAL_ID]',
  },
  {
    id: 'cert-2',
    name: '[Certification Name]',
    issuer: '[Issuing Organization]',
    year: '[Year]',
    credentialUrl: 'https://example.com/verify/[CREDENTIAL_ID]',
  },
  {
    id: 'cert-3',
    name: '[Certification Name]',
    issuer: '[Issuing Organization]',
    year: '[Year]',
    credentialUrl: 'https://example.com/verify/[CREDENTIAL_ID]',
  },
];
