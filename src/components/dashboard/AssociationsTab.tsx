import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import AssociationAccordion from './associations/AssociationAccordion';
import MobileAssociationAccordion from './associations/MobileAssociationAccordion';
import AssociationsPagination from './associations/AssociationsPagination';
import { Association, AssociationsTabProps } from './associations/types';
import { mockAssociations } from './associations/mockData';
import AlpineFilter from '../alpine/AlpineFilter';

const AssociationsTab = ({ onCreateNew }: AssociationsTabProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  // Current page state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
  // Sample data
  const [associations, setAssociations] = useState<Association[]>(mockAssociations);
  
  // Calculate pagination
  const totalPages = Math.ceil(associations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedAssociations = associations.slice(startIndex, startIndex + pageSize);
  
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
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
        <div className="flex flex-col gap-1 w-full sm:w-auto">
          <h2 className="text-lg font-semibold">Your Account Associations</h2>
          <p className="text-sm text-muted-foreground">Manage your associations and access permissions</p>
        </div>
        
        {/* Replace or augment the search with Alpine filter component */}
        <div className="w-full sm:w-64">
          <AlpineFilter 
            onFilterChange={(value) => console.log('Filter changed:', value)} 
            className="mb-2"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Associations</CardTitle>
          <CardDescription>Accounts with associations to business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isMobile ? (
              <MobileAssociationAccordion 
                associations={paginatedAssociations}
                onCommissionAccessChange={handleCommissionAccessChange}
                onEnabledChange={handleEnabledChange}
              />
            ) : (
              <AssociationAccordion 
                associations={paginatedAssociations}
                onCommissionAccessChange={handleCommissionAccessChange}
                onEnabledChange={handleEnabledChange}
              />
            )}
          </div>
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

export default AssociationsTab;
