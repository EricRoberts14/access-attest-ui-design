
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample data for demonstration
const myAccountAssociations = [
  {
    id: 1,
    entity: "Raymond James LLC",
    role: "Delegate",
    accessLevel: "Administrator",
    startDate: "01/15/2025",
    endDate: "05/31/2025"
  },
  {
    id: 2,
    name: "Morgan Financial Partners",
    entity: "Morgan Financial Partners",
    role: "User",
    accessLevel: "Standard",
    startDate: "02/01/2025",
    endDate: "05/31/2025"
  },
  {
    id: 3,
    name: "Fidelity Investments",
    entity: "Fidelity Investments",
    role: "Delegate",
    accessLevel: "Administrator",
    startDate: "03/10/2025",
    endDate: "05/31/2025"
  }
];

// Mobile card component for the account associations
const MobileAccountAssociationCard = ({ association }: { association: any }) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Entity</span>
            <span>{association.entity}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Role</span>
            <span>{association.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Access Level</span>
            <span>{association.accessLevel}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Start Date</span>
            <span>{association.startDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">End Date</span>
            <span>{association.endDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MyAccountTab = () => {
  const isMobile = useIsMobile();

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
              {myAccountAssociations.map((association) => (
                <MobileAccountAssociationCard key={association.id} association={association} />
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Entity</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Access Level</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myAccountAssociations.map((association) => (
                  <TableRow key={association.id}>
                    <TableCell className="font-medium">{association.entity}</TableCell>
                    <TableCell>{association.role}</TableCell>
                    <TableCell>{association.accessLevel}</TableCell>
                    <TableCell>{association.startDate}</TableCell>
                    <TableCell>{association.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-gray-500">
            Showing {myAccountAssociations.length} associations
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyAccountTab;
