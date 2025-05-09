
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
import AttestationStatus from './AttestationStatus';

const AttestationsTab = () => {
  // Mock pending attestation data
  const pendingAttestations = [
    {
      id: '1',
      entityName: 'Global Tech Partners',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '2',
      entityName: 'Sarah Johnson',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '3',
      entityName: 'Accenture Technologies',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '4',
      entityName: 'David Miller',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '5',
      entityName: 'Quantum Systems',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '6',
      entityName: 'Emily Chen',
      contractType: 'Agent',
      commissionAccess: 'No',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '7',
      entityName: 'Global Innovations Inc.',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const,
      enabled: 'Enabled'
    },
    {
      id: '8',
      entityName: 'Michael Brown',
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
                  <TableCell className="font-medium">{attestation.entityName}</TableCell>
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
