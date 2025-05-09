
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
      entityName: 'Raymond James LLC',
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
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-xs font-medium text-left p-3">Account Holder</th>
                  <th className="text-xs font-medium text-left p-3">Association(s)</th>
                  <th className="text-xs font-medium text-left p-3">Contract Type</th>
                  <th className="text-xs font-medium text-left p-3">Expires</th>
                  <th className="text-xs font-medium text-left p-3">Status</th>
                  <th className="text-xs font-medium text-left p-3">Commission Access</th>
                  <th className="text-xs font-medium text-left p-3">Enabled</th>
                  <th className="text-xs font-medium text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {pendingAttestations.map((attestation) => (
                  <tr key={attestation.id}>
                    <td className="p-3 text-sm">
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
                    </td>
                    <td className="p-3 text-sm">{attestation.entityName}</td>
                    <td className="p-3 text-sm">{attestation.contractType}</td>
                    <td className="p-3 text-sm">{attestation.expirationDate}</td>
                    <td className="p-3">
                      <AttestationStatus status={attestation.status} />
                    </td>
                    <td className="p-3 text-sm">{attestation.commissionAccess}</td>
                    <td className="p-3 text-sm">{attestation.enabled}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button size="sm">Attest</Button>
                        <Button size="sm" variant="destructive">Reject</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <div className="text-sm">Page 1 of 1</div>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
};

export default AttestationsTab;
