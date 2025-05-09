
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
import AssociationsPagination from './associations/AssociationsPagination';
import AttestationStatus from './AttestationStatus';

// Updated sample data for demonstration with status field
const myAccountAssociations = [
  {
    id: 1,
    entity: "Raymond James LLC",
    role: "Delegate",
    dateGranted: "01/15/2025",
    status: "valid" as const
  },
  {
    id: 2,
    entity: "Morgan Financial Partners",
    role: "Delegate",
    dateGranted: "02/01/2025",
    status: "valid" as const
  },
  {
    id: 3,
    entity: "Fidelity Investments",
    role: "Delegate",
    dateGranted: "03/10/2025",
    status: "valid" as const
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
            <span className="font-medium">Date Granted</span>
            <span>{association.dateGranted}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <div className="flex items-center">
              <AttestationStatus status={association.status} />
            </div>
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
  
  // Calculate pagination
  const totalPages = Math.ceil(myAccountAssociations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedAssociations = myAccountAssociations.slice(startIndex, startIndex + pageSize);
  
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
              {paginatedAssociations.map((association) => (
                <MobileAccountAssociationCard key={association.id} association={association} />
              ))}
            </div>
          ) : (
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-xs font-medium text-left p-3">Association(s)</th>
                    <th className="text-xs font-medium text-left p-3">Role</th>
                    <th className="text-xs font-medium text-left p-3">Date Granted</th>
                    <th className="text-xs font-medium text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {paginatedAssociations.map((association) => (
                    <tr key={association.id} className="hover:bg-muted/50">
                      <td className="p-3 text-sm font-medium">{association.entity}</td>
                      <td className="p-3 text-sm">{association.role}</td>
                      <td className="p-3 text-sm">{association.dateGranted}</td>
                      <td className="p-3">
                        <AttestationStatus status={association.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
