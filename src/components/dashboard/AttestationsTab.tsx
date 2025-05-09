
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import AttestationStatus from './AttestationStatus';

const AttestationsTab = () => {
  // Mock pending attestation data
  const pendingAttestations = [
    {
      id: '1',
      entityName: 'Global Tech Partners',
      accountHolder: 'Michael Johnson',
      accountEmail: 'michael.johnson@globaltech.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '2',
      entityName: 'Sarah Johnson',
      accountHolder: 'Sarah Johnson',
      accountEmail: 'sarah.johnson@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '3',
      entityName: 'Accenture Technologies',
      accountHolder: 'Robert Williams',
      accountEmail: 'r.williams@accenture.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '4',
      entityName: 'David Miller',
      accountHolder: 'David Miller',
      accountEmail: 'david.miller@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '5',
      entityName: 'Quantum Systems',
      accountHolder: 'Jennifer Adams',
      accountEmail: 'j.adams@quantum.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '6',
      entityName: 'Emily Chen',
      accountHolder: 'Emily Chen',
      accountEmail: 'emily.chen@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '7',
      entityName: 'Global Innovations Inc.',
      accountHolder: 'Thomas Wilson',
      accountEmail: 't.wilson@globalinnovations.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '8',
      entityName: 'Michael Brown',
      accountHolder: 'Michael Brown',
      accountEmail: 'michael.brown@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Required Attestations</CardTitle>
          <CardDescription>Access permissions requiring periodic attestation</CardDescription>
        </div>
        <Button>Attest All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Holder</TableHead>
                <TableHead>Entity Name</TableHead>
                <TableHead>Contract Type</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Commission Access</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingAttestations.map((attestation) => (
                <TableRow key={attestation.id}>
                  <TableCell className="font-medium">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <span className="cursor-help underline decoration-dotted">
                          {attestation.accountHolder}
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto">
                        <div className="text-sm">
                          <p className="font-medium">{attestation.accountEmail}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                  <TableCell>{attestation.entityName}</TableCell>
                  <TableCell>{attestation.contractType}</TableCell>
                  <TableCell>{attestation.expirationDate}</TableCell>
                  <TableCell>
                    <AttestationStatus status={attestation.status} />
                  </TableCell>
                  <TableCell>{attestation.commissionAccess}</TableCell>
                  <TableCell>{attestation.enabled}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm">Attest</Button>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttestationsTab;
