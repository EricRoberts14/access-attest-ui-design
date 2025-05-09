
export type Association = {
  id: number;
  name: string;
  accountHolder: string;
  accountEmail: string;
  contractType: 'RIA' | 'Agent';
  lastAttested: string;
  status: 'valid' | 'pending' | 'expired';
  commissionAccess: boolean;
  enabled: boolean;
};

export interface AssociationsTabProps {
  onCreateNew?: () => void;
}
