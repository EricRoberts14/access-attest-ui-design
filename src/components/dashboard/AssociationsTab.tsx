import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import AttestationStatus from './AttestationStatus';

// Define a type for the association entity
type Association = {
  id: number;
  name: string;
  accountHolder: string;
  accountEmail: string;
  contractType: 'RIA' | 'Agent';
  lastAttested: string;
  status: 'valid' | 'pending' | 'expired';
  commissionAccess: boolean;
  enabled: boolean;
};

interface AssociationsTabProps {
  onCreateNew?: () => void;
}

const AssociationsTab = ({ onCreateNew }: AssociationsTabProps) => {
  const { toast } = useToast();
  // Current page state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
  // Sample data
  const [associations, setAssociations] = useState<Association[]>([
    { id: 1, name: 'Raymond James LLC', accountHolder: 'James Wilson', accountEmail: 'james.wilson@acme.com', contractType: 'RIA', lastAttested: 'May 1, 2025', status: 'valid', commissionAccess: true, enabled: true },
    { id: 2, name: 'Raymond James LLC', accountHolder: 'James Smith', accountEmail: 'james.smith@example.com', contractType: 'Agent', lastAttested: 'May 20, 2025', status: 'valid', commissionAccess: false, enabled: true },
    { id: 3, name: 'Raymond James LLC', accountHolder: 'Michael Johnson', accountEmail: 'michael.johnson@globaltech.com', contractType: 'RIA', lastAttested: 'November 30, 2024', status: 'pending', commissionAccess: true, enabled: true },
    { id: 4, name: 'Raymond James LLC', accountHolder: 'Sarah Johnson', accountEmail: 'sarah.johnson@example.com', contractType: 'Agent', lastAttested: 'November 25, 2024', status: 'expired', commissionAccess: false, enabled: true },
  ]);
  
  // Track which row is being edited
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Calculate pagination
  const totalPages = Math.ceil(associations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedAssociations = associations.slice(startIndex, startIndex + pageSize);
  
  // Toggle edit mode for a row
  const toggleEdit = (id: number) => {
    if (editingId === id) {
      // Save changes
      toast({
        title: "Changes saved",
        description: "Association settings have been updated",
      });
      setEditingId(null);
    } else {
      setEditingId(id);
    }
  };
  
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
  
  // Handle commission access change
  const handleCommissionAccessChange = (id: number, value: boolean) => {
    setAssociations(associations.map(assoc => 
      assoc.id === id ? { ...assoc, commissionAccess: value } : assoc
    ));
  };
  
  // Handle enabled state change
  const handleEnabledChange = (id: number, value: boolean) => {
    setAssociations(associations.map(assoc => 
      assoc.id === id ? { ...assoc, enabled: value } : assoc
    ));
  };

  return (
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
                  <th className="text-xs font-medium text-left p-3">Account Holder</th>
                  <th className="text-xs font-medium text-left p-3">Association(s)</th>
                  <th className="text-xs font-medium text-left p-3">Contract Type</th>
                  <th className="text-xs font-medium text-left p-3">Last Attested</th>
                  <th className="text-xs font-medium text-left p-3">Status</th>
                  <th className="text-xs font-medium text-left p-3">Commission Access</th>
                  <th className="text-xs font-medium text-left p-3">Enabled</th>
                  <th className="text-xs font-medium text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {paginatedAssociations.map((association) => (
                  <tr key={association.id} className="hover:bg-muted/50">
                    <td className="p-3 text-sm">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <span className="cursor-help underline decoration-dotted">
                            {association.accountHolder}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto">
                          <div className="text-sm">
                            <p className="font-medium">{association.accountEmail}</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </td>
                    <td className="p-3 text-sm">{association.name}</td>
                    <td className="p-3 text-sm">{association.contractType}</td>
                    <td className="p-3 text-sm">{association.lastAttested}</td>
                    <td className="p-3">
                      <AttestationStatus status={association.status} />
                    </td>
                    <td className="p-3 text-sm">
                      {editingId === association.id ? (
                        <RadioGroup 
                          defaultValue={association.commissionAccess ? "yes" : "no"}
                          className="flex gap-4"
                          onValueChange={(value) => handleCommissionAccessChange(association.id, value === "yes")}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id={`yes-${association.id}`} />
                            <Label htmlFor={`yes-${association.id}`}>Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id={`no-${association.id}`} />
                            <Label htmlFor={`no-${association.id}`}>No</Label>
                          </div>
                        </RadioGroup>
                      ) : (
                        association.commissionAccess ? "Yes" : "No"
                      )}
                    </td>
                    <td className="p-3 text-sm">
                      {editingId === association.id ? (
                        <div className="flex items-center space-x-2">
                          <Switch 
                            checked={association.enabled}
                            onCheckedChange={(checked) => handleEnabledChange(association.id, checked)}
                          />
                          <Label>{association.enabled ? "Enabled" : "Disabled"}</Label>
                        </div>
                      ) : (
                        association.enabled ? "Enabled" : "Disabled"
                      )}
                    </td>
                    <td className="p-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => toggleEdit(association.id)}
                      >
                        {editingId === association.id ? "Save" : "Manage"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  isActive={page === currentPage} 
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default AssociationsTab;
