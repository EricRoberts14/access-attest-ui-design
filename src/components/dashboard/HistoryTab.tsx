
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History } from 'lucide-react';
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
      entityName: 'Acme Corporation',
      entityType: 'Organization',
      accessLevel: 'Full Access',
      attestedDate: 'November 25, 2024',
      attestedBy: 'John Smith',
      action: 'Approved'
    },
    {
      id: '102',
      entityName: 'James Smith',
      entityType: 'Individual',
      accessLevel: 'Read Only',
      attestedDate: 'November 23, 2024',
      attestedBy: 'Maria Garcia',
      action: 'Approved'
    },
    {
      id: '103',
      entityName: 'Quantum Systems',
      entityType: 'Organization',
      accessLevel: 'Limited Access',
      attestedDate: 'November 20, 2024',
      attestedBy: 'John Smith',
      action: 'Rejected'
    },
    {
      id: '104',
      entityName: 'Emily Chen',
      entityType: 'Individual',
      accessLevel: 'Full Access',
      attestedDate: 'November 18, 2024',
      attestedBy: 'Robert Johnson',
      action: 'Approved'
    },
    {
      id: '105',
      entityName: 'Global Innovations Inc.',
      entityType: 'Organization',
      accessLevel: 'Limited Access',
      attestedDate: 'November 15, 2024',
      attestedBy: 'Maria Garcia',
      action: 'Approved'
    },
    {
      id: '106',
      entityName: 'Michael Brown',
      entityType: 'Individual',
      accessLevel: 'Read Only',
      attestedDate: 'November 10, 2024',
      attestedBy: 'John Smith',
      action: 'Rejected'
    },
    {
      id: '107',
      entityName: 'Tech Partners LLC',
      entityType: 'Organization',
      accessLevel: 'Full Access',
      attestedDate: 'November 8, 2024',
      attestedBy: 'Robert Johnson',
      action: 'Approved'
    },
    {
      id: '108',
      entityName: 'Jennifer Wilson',
      entityType: 'Individual',
      accessLevel: 'Limited Access',
      attestedDate: 'November 5, 2024',
      attestedBy: 'Maria Garcia',
      action: 'Approved'
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
                <TableHead>Entity Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Access Level</TableHead>
                <TableHead>Attested Date</TableHead>
                <TableHead>Attested By</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyAttestations.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.entityName}</TableCell>
                  <TableCell>{item.entityType}</TableCell>
                  <TableCell>{item.accessLevel}</TableCell>
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
