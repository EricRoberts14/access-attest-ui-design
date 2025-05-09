
export interface HistoryData {
  id: string;
  entityName: string;
  accountHolder: string;
  accountEmail: string;
  contractType: string;
  commissionAccess: string;
  attestedDate: string;
  attestedBy: string;
  action: 'Approved' | 'Rejected';
  enabled: boolean;
}
