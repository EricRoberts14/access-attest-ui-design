
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
import AssociationsPagination from './associations/AssociationsPagination';
import AttestationStatus from './AttestationStatus';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

// Updated sample data with more associations per account holder
const myAccountAssociations = [
  // First account holder group
  {
    accountHolder: "John Smith",
    email: "john.smith@example.com",
    username: "jsmith_2025",
    associations: [
      {
        id: 1,
        entity: "Raymond James LLC",
        role: "Delegate",
        contractType: "RIA",
        dateGranted: "01/15/2025",
        lastAttested: "01/20/2025",
        status: "valid" as const,
        commissionAccess: true,
        enabled: true
      },
      {
        id: 2,
        entity: "Raymond James Financial",
        role: "Delegate",
        contractType: "Agent",
        dateGranted: "01/18/2025",
        lastAttested: "01/22/2025",
        status: "valid" as const,
        commissionAccess: false,
        enabled: true
      },
      {
        id: 3,
        entity: "Raymond James Investments",
        role: "Delegate",
        contractType: "RIA",
        dateGranted: "01/25/2025",
        lastAttested: "01/30/2025",
        status: "valid" as const,
        commissionAccess: true,
        enabled: true
      }
    ]
  },
  // Second account holder group
  {
    accountHolder: "Jane Davis",
    email: "jane.davis@example.com",
    username: "jdavis_2025",
    associations: [
      {
        id: 4,
        entity: "Morgan Financial Partners",
        role: "Delegate",
        contractType: "Agent",
        dateGranted: "02/01/2025",
        lastAttested: "02/05/2025",
        status: "valid" as const,
        commissionAccess: true,
        enabled: true
      },
      {
        id: 5,
        entity: "Morgan Wealth Management",
        role: "Delegate",
        contractType: "RIA",
        dateGranted: "02/10/2025",
        lastAttested: "02/15/2025",
        status: "valid" as const,
        commissionAccess: false,
        enabled: false
      },
      {
        id: 6,
        entity: "Morgan Stanley Associates",
        role: "Delegate",
        contractType: "Agent",
        dateGranted: "02/20/2025",
        lastAttested: "02/25/2025",
        status: "valid" as const,
        commissionAccess: true,
        enabled: true
      }
    ]
  },
  // Third account holder group
  {
    accountHolder: "Robert Johnson",
    email: "robert.johnson@example.com",
    username: "rjohnson_2025",
    associations: [
      {
        id: 7,
        entity: "Fidelity Investments",
        role: "Delegate",
        contractType: "RIA",
        dateGranted: "03/10/2025",
        lastAttested: "03/15/2025",
        status: "valid" as const,
        commissionAccess: true,
        enabled: true
      },
      {
        id: 8,
        entity: "Fidelity Advisory Services",
        role: "Delegate",
        contractType: "Agent",
        dateGranted: "03/12/2025",
        lastAttested: "03/18/2025",
        status: "valid" as const,
        commissionAccess: true,
        enabled: false
      },
      {
        id: 9,
        entity: "Fidelity Financial Consultants",
        role: "Delegate",
        contractType: "RIA",
        dateGranted: "03/20/2025",
        lastAttested: "03/25/2025",
        status: "valid" as const,
        commissionAccess: false,
        enabled: true
      }
    ]
  }
];

// Mobile card component for the account associations
const MobileAccountAssociationCard = ({ association }: { association: any }) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Association(s)</span>
            <span>{association.entity}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Role</span>
            <span>{association.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Contract Type</span>
            <span>{association.contractType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date Granted</span>
            <span>{association.dateGranted}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Last Attested</span>
            <span>{association.lastAttested}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <div className="flex items-center">
              <AttestationStatus status={association.status} />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Commission Access</span>
            <span>{association.commissionAccess ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Enabled</span>
            <span>{association.enabled ? "Enabled" : "Disabled"}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MyAccountTab = () => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
  // Calculate pagination - now working with account holders instead of individual associations
  const totalPages = Math.ceil(myAccountAssociations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedAccountHolders = myAccountAssociations.slice(startIndex, startIndex + pageSize);
  
  // Handle page changes
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Account Associations</CardTitle>
          <CardDescription>Organizations you are associated with</CardDescription>
        </CardHeader>
        <CardContent>
          {isMobile ? (
            <div className="space-y-4">
              {paginatedAccountHolders.map((accountHolder) => (
                <div key={accountHolder.username} className="border rounded-lg p-4 mb-4">
                  <div className="mb-3">
                    <div className="font-semibold text-lg">{accountHolder.accountHolder}</div>
                    <div className="text-sm text-muted-foreground">{accountHolder.email}</div>
                    <div className="text-sm text-muted-foreground">@{accountHolder.username}</div>
                  </div>
                  <div className="space-y-4">
                    {accountHolder.associations.map((association) => (
                      <MobileAccountAssociationCard key={association.id} association={association} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {paginatedAccountHolders.map((accountHolder, index) => (
                <AccordionItem key={accountHolder.username} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="hover:bg-muted/50 px-3">
                    <div className="flex flex-1 text-left">
                      <div className="w-1/3">{accountHolder.accountHolder}</div>
                      <div className="w-1/3">{accountHolder.email}</div>
                      <div className="w-1/3">@{accountHolder.username}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="border rounded-lg overflow-hidden mt-2">
                      <table className="w-full">
                        <thead className="bg-muted">
                          <tr>
                            <th className="text-xs font-medium text-left p-3">Association(s)</th>
                            <th className="text-xs font-medium text-left p-3">Contract Type</th>
                            <th className="text-xs font-medium text-left p-3">Date Granted</th>
                            <th className="text-xs font-medium text-left p-3">Last Attested</th>
                            <th className="text-xs font-medium text-left p-3">Status</th>
                            <th className="text-xs font-medium text-left p-3">Commission Access</th>
                            <th className="text-xs font-medium text-left p-3">Enabled</th>
                            <th className="text-xs font-medium text-left p-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {accountHolder.associations.map((association) => (
                            <tr key={association.id} className="hover:bg-muted/50">
                              <td className="p-3 text-sm font-medium">{association.entity}</td>
                              <td className="p-3 text-sm">{association.contractType}</td>
                              <td className="p-3 text-sm">{association.dateGranted}</td>
                              <td className="p-3 text-sm">{association.lastAttested}</td>
                              <td className="p-3">
                                <AttestationStatus status={association.status} />
                              </td>
                              <td className="p-3 text-sm">
                                {association.commissionAccess ? "Yes" : "No"}
                              </td>
                              <td className="p-3 text-sm">
                                <div className="flex items-center">
                                  <Switch 
                                    checked={association.enabled}
                                    disabled
                                    className="mr-2"
                                  />
                                  <span>{association.enabled ? "Enabled" : "Disabled"}</span>
                                </div>
                              </td>
                              <td className="p-3">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                >
                                  View
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <AssociationsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            onPageChange={setCurrentPage}
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyAccountTab;
