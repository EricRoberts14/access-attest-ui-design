
export type AttestationStatus = 'valid' | 'pending' | 'expired';

export interface AttestationData {
  id: string;
  entityName: string;
  accountHolder: string;
  accountEmail: string;
  contractType: string;
  commissionAccess: string;
  expirationDate: string;
  status: AttestationStatus;
  enabled: string;
}
