import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Check, X, History } from 'lucide-react';
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

const AttestationStatus = ({ status }: { status: 'valid' | 'pending' | 'expired' }) => {
  const statusConfig = {
    valid: {
      color: "attestation-valid",
      text: "Valid",
      icon: Check
    },
    pending: {
      color: "attestation-pending",
      text: "Pending",
      icon: Clock
    },
    expired: {
      color: "attestation-expired",
      text: "Expired",
      icon: X
    }
  };
  
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full bg-${config.color}`}></span>
      <span className="text-sm font-medium">{config.text}</span>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};

const Dashboard = () => {
  // Mock pending attestation data
  const pendingAttestations = [
    {
      id: '1',
      entityName: 'Global Tech Partners',
      entityType: 'Organization',
      accessLevel: 'Full Access',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '2',
      entityName: 'Sarah Johnson',
      entityType: 'Individual',
      accessLevel: 'Limited Access',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '3',
      entityName: 'Accenture Technologies',
      entityType: 'Organization',
      accessLevel: 'Read Only',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '4',
      entityName: 'David Miller',
      entityType: 'Individual',
      accessLevel: 'Full Access',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '5',
      entityName: 'Quantum Systems',
      entityType: 'Organization',
      accessLevel: 'Limited Access',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '6',
      entityName: 'Emily Chen',
      entityType: 'Individual',
      accessLevel: 'Read Only',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '7',
      entityName: 'Global Innovations Inc.',
      entityType: 'Organization',
      accessLevel: 'Full Access',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    },
    {
      id: '8',
      entityName: 'Michael Brown',
      entityType: 'Individual',
      accessLevel: 'Limited Access',
      expirationDate: 'May 31, 2025',
      status: 'pending' as const
    }
  ];

  // Add historical attestation data from November 2024
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
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Access Management Dashboard</h1>
          <p className="text-muted-foreground">Manage your account associations and attestations</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline">Export</Button>
          <Button>Create New Association</Button>
        </div>
      </div>
      
      {/* Combined Attestation and Associations Summary Card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Current Attestation Period</CardTitle>
          <CardDescription>May 1-31, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm">14 items require attestation</span>
          </div>
          <Progress value={42} className="h-2 mb-5" />
          
          <div className="space-y-4 mt-3">
            <h3 className="text-sm font-medium">Accounts</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Accounts</span>
                <span className="font-medium">20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pending Attestations</span>
                <Badge variant="outline" className="bg-attestation-pending/10 text-attestation-pending">8</Badge>
              </div>
            </div>
          </div>

          {/* Updated to "Current Attestation Period" information */}
          <div className="space-y-4 mt-4 pt-4 border-t">
            <h3 className="text-sm font-medium">Current Attestation Period</h3>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">May 1-31, 2025</span>
            </div>
            <Progress value={42} className="h-2" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="default" className="w-full">Prepare All Attestations</Button>
        </CardFooter>
      </Card>
      
      {/* Main Tabs */}
      <Tabs defaultValue="associations" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="associations">Associations</TabsTrigger>
          <TabsTrigger value="attestations">Attestations</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="associations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Associations</CardTitle>
              <CardDescription>Organizations and individuals with active access permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-xs font-medium text-left p-3">Entity Name</th>
                        <th className="text-xs font-medium text-left p-3">Type</th>
                        <th className="text-xs font-medium text-left p-3">Access Level</th>
                        <th className="text-xs font-medium text-left p-3">Last Attested</th>
                        <th className="text-xs font-medium text-left p-3">Status</th>
                        <th className="text-xs font-medium text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3 text-sm">Acme Corporation</td>
                        <td className="p-3 text-sm">Organization</td>
                        <td className="p-3 text-sm">Full Access</td>
                        <td className="p-3 text-sm">March 15, 2025</td>
                        <td className="p-3">
                          <AttestationStatus status="valid" />
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">Manage</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm">James Smith</td>
                        <td className="p-3 text-sm">Individual</td>
                        <td className="p-3 text-sm">Read Only</td>
                        <td className="p-3 text-sm">February 28, 2025</td>
                        <td className="p-3">
                          <AttestationStatus status="valid" />
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">Manage</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm">Global Tech Partners</td>
                        <td className="p-3 text-sm">Organization</td>
                        <td className="p-3 text-sm">Full Access</td>
                        <td className="p-3 text-sm">November 30, 2024</td>
                        <td className="p-3">
                          <AttestationStatus status="pending" />
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">Manage</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm">Sarah Johnson</td>
                        <td className="p-3 text-sm">Individual</td>
                        <td className="p-3 text-sm">Limited Access</td>
                        <td className="p-3 text-sm">November 25, 2024</td>
                        <td className="p-3">
                          <AttestationStatus status="expired" />
                        </td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">Manage</Button>
                        </td>
                      </tr>
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
        </TabsContent>
        
        <TabsContent value="attestations">
          <Card>
            <CardHeader>
              <CardTitle>Required Attestations</CardTitle>
              <CardDescription>Access permissions requiring periodic attestation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Entity Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Access Level</TableHead>
                      <TableHead>Expires</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingAttestations.map((attestation) => (
                      <TableRow key={attestation.id}>
                        <TableCell className="font-medium">{attestation.entityName}</TableCell>
                        <TableCell>{attestation.entityType}</TableCell>
                        <TableCell>{attestation.accessLevel}</TableCell>
                        <TableCell>{attestation.expirationDate}</TableCell>
                        <TableCell>
                          <AttestationStatus status={attestation.status} />
                        </TableCell>
                        <TableCell>
                          <Button size="sm">Attest</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Attest All</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
