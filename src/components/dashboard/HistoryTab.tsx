
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Holder</TableHead>
                <TableHead>Association(s)</TableHead>
                <TableHead>Contract Type</TableHead>
                <TableHead>Commission Access</TableHead>
                <TableHead>Enabled</TableHead>
                <TableHead>Attested Date</TableHead>
                <TableHead>Attested By</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyAttestations.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
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
                  </TableCell>
                  <TableCell>{item.entityName}</TableCell>
                  <TableCell>{item.contractType}</TableCell>
                  <TableCell>{item.commissionAccess}</TableCell>
                  <TableCell>{item.enabled ? "Enabled" : "Disabled"}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <History className="h-4 w-4 text-muted-foreground" />
                      {item.attestedDate}
                    </div>
                  </TableCell>
                  <TableCell>{item.attestedBy}</TableCell>
                  <TableCell>
                    <Badge variant={item.action === 'Approved' ? 'outline' : 'destructive'}>
                      {item.action}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoryTab;
