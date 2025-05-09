import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const HistoryTab = () => {
  // Historical attestation data from November 2024
  const historyAttestations = [
    {
      id: '101',
      entityName: 'Raymond James LLC',
      accountHolder: 'James Wilson',
      accountEmail: 'james.wilson@acme.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      attestedDate: 'November 25, 2024',
      attestedBy: 'John Doe',
      action: 'Approved',
      enabled: true
    },
    {
      id: '102',
      entityName: 'Raymond James LLC',
      accountHolder: 'James Smith',
      accountEmail: 'james.smith@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      attestedDate: 'November 23, 2024',
      attestedBy: 'John Doe',
      action: 'Approved',
      enabled: true
    },
    {
      id: '103',
      entityName: 'Raymond James LLC',
      accountHolder: 'Jennifer Adams',
      accountEmail: 'j.adams@quantum.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      attestedDate: 'November 20, 2024',
      attestedBy: 'John Doe',
      action: 'Rejected',
      enabled: false
    },
    {
      id: '104',
      entityName: 'Raymond James LLC',
      accountHolder: 'Emily Chen',
      accountEmail: 'emily.chen@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      attestedDate: 'November 18, 2024',
      attestedBy: 'John Doe',
      action: 'Approved',
      enabled: true
    },
    {
      id: '105',
      entityName: 'Raymond James LLC',
      accountHolder: 'Thomas Wilson',
      accountEmail: 't.wilson@globalinnovations.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      attestedDate: 'November 15, 2024',
      attestedBy: 'John Doe',
      action: 'Approved',
      enabled: true
    },
    {
      id: '106',
      entityName: 'Raymond James LLC',
      accountHolder: 'Michael Brown',
      accountEmail: 'michael.brown@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      attestedDate: 'November 10, 2024',
      attestedBy: 'John Doe',
      action: 'Rejected',
      enabled: false
    },
    {
      id: '107',
      entityName: 'Raymond James LLC',
      accountHolder: 'Richard Thompson',
      accountEmail: 'r.thompson@techpartners.com',
      contractType: 'RIA',
      commissionAccess: 'Yes',
      attestedDate: 'November 8, 2024',
      attestedBy: 'John Doe',
      action: 'Approved',
      enabled: true
    },
    {
      id: '108',
      entityName: 'Raymond James LLC',
      accountHolder: 'Jennifer Wilson',
      accountEmail: 'jennifer.wilson@example.com',
      contractType: 'Agent',
      commissionAccess: 'No',
      attestedDate: 'November 5, 2024',
      attestedBy: 'John Doe',
      action: 'Approved',
      enabled: true
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attestation History</CardTitle>
        <CardDescription>Record of past attestation activities</CardDescription>
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
                  <th className="text-xs font-medium text-left p-3">Commission Access</th>
                  <th className="text-xs font-medium text-left p-3">Enabled</th>
                  <th className="text-xs font-medium text-left p-3">Attested Date</th>
                  <th className="text-xs font-medium text-left p-3">Attested By</th>
                  <th className="text-xs font-medium text-left p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {historyAttestations.map((item) => (
                  <tr key={item.id}>
                    <td className="p-3 text-sm">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <span className="cursor-help underline decoration-dotted">
                            {item.accountHolder}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto">
                          <div className="text-sm">
                            <p className="font-medium">{item.accountEmail}</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </td>
                    <td className="p-3 text-sm">{item.entityName}</td>
                    <td className="p-3 text-sm">{item.contractType}</td>
                    <td className="p-3 text-sm">{item.commissionAccess}</td>
                    <td className="p-3 text-sm">{item.enabled ? "Enabled" : "Disabled"}</td>
                    <td className="p-3 text-sm">
                      <div className="flex items-center gap-2">
                        <History className="h-4 w-4 text-muted-foreground" />
                        {item.attestedDate}
                      </div>
                    </td>
                    <td className="p-3 text-sm">{item.attestedBy}</td>
                    <td className="p-3">
                      <Badge variant={item.action === 'Approved' ? 'outline' : 'destructive'}>
                        {item.action}
                      </Badge>
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
        <div className="text-sm">Page 1 of 3</div>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
};

export default HistoryTab;
