
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Check, X } from 'lucide-react';

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
          <CardTitle className="text-lg">Next Attestation Period</CardTitle>
          <CardDescription>September 1-30, 2025</CardDescription>
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
                <span className="text-sm">Organizations</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Individuals</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pending Attestations</span>
                <Badge variant="outline" className="bg-attestation-pending/10 text-attestation-pending">8</Badge>
              </div>
            </div>
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
                        <td className="p-3 text-sm">September 29, 2024</td>
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
                        <td className="p-3 text-sm">August 5, 2024</td>
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
              <div className="p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No Pending Attestations</h3>
                <p className="text-muted-foreground mb-4">All required attestations have been completed for this period.</p>
                <Button>View Attestation History</Button>
              </div>
            </CardContent>
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
                {/* History content would go here */}
                <p className="text-muted-foreground text-center p-8">Historical attestation data will be displayed here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
