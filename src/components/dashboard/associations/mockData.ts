
import { Association } from './types';

export const mockAssociations: Association[] = [
  { 
    id: 1, 
    name: 'Raymond James LLC', 
    accountHolder: 'James Wilson', 
    accountEmail: 'james.wilson@acme.com', 
    contractType: 'RIA', 
    lastAttested: 'May 1, 2025', 
    status: 'valid', 
    commissionAccess: true, 
    enabled: true 
  },
  { 
    id: 2, 
    name: 'Raymond James LLC', 
    accountHolder: 'James Smith', 
    accountEmail: 'james.smith@example.com', 
    contractType: 'Agent', 
    lastAttested: 'May 20, 2025', 
    status: 'valid', 
    commissionAccess: false, 
    enabled: true 
  },
  { 
    id: 3, 
    name: 'Raymond James LLC', 
    accountHolder: 'Michael Johnson', 
    accountEmail: 'michael.johnson@globaltech.com', 
    contractType: 'RIA', 
    lastAttested: 'November 30, 2024', 
    status: 'pending', 
    commissionAccess: true, 
    enabled: true 
  },
  { 
    id: 4, 
    name: 'Raymond James LLC', 
    accountHolder: 'Sarah Johnson', 
    accountEmail: 'sarah.johnson@example.com', 
    contractType: 'Agent', 
    lastAttested: 'November 25, 2024', 
    status: 'expired', 
    commissionAccess: false, 
    enabled: true 
  },
];
