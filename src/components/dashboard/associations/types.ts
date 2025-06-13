
export type Association = {
  id: number;
  name: string;
  accountHolder: string;
  accountEmail: string;
  userName?: string;
  contractType: 'RIA' | 'Agent';
  lastAttested: string;
  status: 'valid' | 'pending' | 'expired';
  commissionAccess: boolean;
  enabled: boolean;
  accountClaimed?: boolean; // New field for claim status
};

export interface AssociationsTabProps {
  onCreateNew?: () => void;
}
