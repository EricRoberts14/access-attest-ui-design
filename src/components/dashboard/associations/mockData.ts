
import { Association } from './types';

export const mockAssociations: Association[] = [
  // James Wilson's associations
  { 
    id: 1, 
    name: 'Raymond James LLC', 
    accountHolder: 'James Wilson', 
    accountEmail: 'james.wilson@acme.com', 
    userName: 'jwilson',
    contractType: 'RIA', 
    lastAttested: 'May 1, 2025', 
    status: 'valid', 
    commissionAccess: true, 
    enabled: true 
  },
  { 
    id: 2, 
    name: 'Morgan Financial Partners', 
    accountHolder: 'James Wilson', 
    accountEmail: 'james.wilson@acme.com', 
    userName: 'jwilson',
    contractType: 'RIA', 
    lastAttested: 'April 15, 2025', 
    status: 'valid', 
    commissionAccess: false, 
    enabled: true 
  },
  { 
    id: 3, 
    name: 'First Trust Advisors', 
    accountHolder: 'James Wilson', 
    accountEmail: 'james.wilson@acme.com', 
    userName: 'jwilson',
    contractType: 'Agent', 
    lastAttested: 'April 10, 2025', 
    status: 'valid', 
    commissionAccess: true, 
    enabled: true 
  },
  
  // James Smith's associations
  { 
    id: 4, 
    name: 'Raymond James LLC', 
    accountHolder: 'James Smith', 
    accountEmail: 'james.smith@example.com', 
    userName: 'jsmith',
    contractType: 'Agent', 
    lastAttested: 'May 20, 2025', 
    status: 'valid', 
    commissionAccess: false, 
    enabled: true 
  },
  { 
    id: 5, 
    name: 'Fidelity Investments', 
    accountHolder: 'James Smith', 
    accountEmail: 'james.smith@example.com', 
    userName: 'jsmith',
    contractType: 'RIA', 
    lastAttested: 'May 15, 2025', 
    status: 'valid', 
    commissionAccess: true, 
    enabled: false 
  },
  { 
    id: 6, 
    name: 'Vanguard Group', 
    accountHolder: 'James Smith', 
    accountEmail: 'james.smith@example.com', 
    userName: 'jsmith',
    contractType: 'Agent', 
    lastAttested: 'May 5, 2025', 
    status: 'valid', 
    commissionAccess: false, 
    enabled: true 
  },
  
  // Michael Johnson's associations
  { 
    id: 7, 
    name: 'Raymond James LLC', 
    accountHolder: 'Michael Johnson', 
    accountEmail: 'michael.johnson@globaltech.com', 
    userName: 'mjohnson',
    contractType: 'RIA', 
    lastAttested: 'November 30, 2024', 
    status: 'pending', 
    commissionAccess: true, 
    enabled: true 
  },
  { 
    id: 8, 
    name: 'BlackRock Advisors', 
    accountHolder: 'Michael Johnson', 
    accountEmail: 'michael.johnson@globaltech.com', 
    userName: 'mjohnson',
    contractType: 'RIA', 
    lastAttested: 'November 20, 2024', 
    status: 'pending', 
    commissionAccess: false, 
    enabled: true 
  },
  { 
    id: 9, 
    name: 'Charles Schwab', 
    accountHolder: 'Michael Johnson', 
    accountEmail: 'michael.johnson@globaltech.com', 
    userName: 'mjohnson',
    contractType: 'Agent', 
    lastAttested: 'November 15, 2024', 
    status: 'pending', 
    commissionAccess: true, 
    enabled: false 
  },
  
  // Sarah Johnson's associations
  { 
    id: 10, 
    name: 'Raymond James LLC', 
    accountHolder: 'Sarah Johnson', 
    accountEmail: 'sarah.johnson@example.com', 
    userName: 'sjohnson',
    contractType: 'Agent', 
    lastAttested: 'November 25, 2024', 
    status: 'expired', 
    commissionAccess: false, 
    enabled: true 
  },
  { 
    id: 11, 
    name: 'T. Rowe Price', 
    accountHolder: 'Sarah Johnson', 
    accountEmail: 'sarah.johnson@example.com', 
    userName: 'sjohnson',
    contractType: 'RIA', 
    lastAttested: 'November 20, 2024', 
    status: 'expired', 
    commissionAccess: true, 
    enabled: false 
  },
  { 
    id: 12, 
    name: 'American Funds', 
    accountHolder: 'Sarah Johnson', 
    accountEmail: 'sarah.johnson@example.com', 
    userName: 'sjohnson',
    contractType: 'Agent', 
    lastAttested: 'November 15, 2024', 
    status: 'expired', 
    commissionAccess: false, 
    enabled: true 
  }
];

