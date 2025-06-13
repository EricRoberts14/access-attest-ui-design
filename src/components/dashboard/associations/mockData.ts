import { Association } from './types';

export const mockAssociations: Association[] = [
  {
    id: 1,
    name: "Charles Schwab Corporation",
    accountHolder: "John Smith",
    accountEmail: "john.smith@example.com",
    userName: "jsmith",
    contractType: "RIA",
    lastAttested: "2024-01-15",
    status: "valid",
    commissionAccess: true,
    enabled: true,
    accountClaimed: true
  },
  {
    id: 2,
    name: "Fidelity Investments",
    accountHolder: "Sarah Johnson",
    accountEmail: "sarah.johnson@example.com",
    contractType: "Agent",
    lastAttested: "2024-02-10",
    status: "pending",
    commissionAccess: false,
    enabled: true,
    accountClaimed: false
  },
  {
    id: 3,
    name: "Raymond James Financial",
    accountHolder: "Michael Brown",
    accountEmail: "michael.brown@example.com",
    userName: "mbrown",
    contractType: "RIA",
    lastAttested: "2023-12-20",
    status: "expired",
    commissionAccess: true,
    enabled: false,
    accountClaimed: true
  },
  {
    id: 4,
    name: "Charles Schwab Corporation",
    accountHolder: "Emily Davis",
    accountEmail: "emily.davis@example.com",
    contractType: "Agent",
    lastAttested: "2024-01-05",
    status: "valid",
    commissionAccess: false,
    enabled: true,
    accountClaimed: false
  },
  {
    id: 5,
    name: "Vanguard Group",
    accountHolder: "David Wilson",
    accountEmail: "david.wilson@example.com",
    userName: "dwilson",
    contractType: "RIA",
    lastAttested: "2024-02-15",
    status: "valid",
    commissionAccess: true,
    enabled: true,
    accountClaimed: true
  },
  {
    id: 6,
    name: "TD Ameritrade",
    accountHolder: "Lisa Anderson",
    accountEmail: "lisa.anderson@example.com",
    contractType: "Agent",
    lastAttested: "2024-01-25",
    status: "pending",
    commissionAccess: false,
    enabled: true,
    accountClaimed: false
  },
  {
    id: 7,
    name: "E*TRADE",
    accountHolder: "Robert Martinez",
    accountEmail: "robert.martinez@example.com",
    userName: "rmartinez",
    contractType: "RIA",
    lastAttested: "2023-11-30",
    status: "expired",
    commissionAccess: true,
    enabled: false,
    accountClaimed: true
  },
  {
    id: 8,
    name: "Interactive Brokers",
    accountHolder: "Jennifer Garcia",
    accountEmail: "jennifer.garcia@example.com",
    contractType: "Agent",
    lastAttested: "2024-02-05",
    status: "valid",
    commissionAccess: false,
    enabled: true,
    accountClaimed: false
  },
  {
    id: 9,
    name: "Merrill Lynch",
    accountHolder: "Christopher Lee",
    accountEmail: "christopher.lee@example.com",
    userName: "clee",
    contractType: "RIA",
    lastAttested: "2024-01-20",
    status: "valid",
    commissionAccess: true,
    enabled: true,
    accountClaimed: true
  },
  {
    id: 10,
    name: "Morgan Stanley",
    accountHolder: "Amanda Thompson",
    accountEmail: "amanda.thompson@example.com",
    contractType: "Agent",
    lastAttested: "2024-02-12",
    status: "pending",
    commissionAccess: false,
    enabled: true,
    accountClaimed: false
  }
];
