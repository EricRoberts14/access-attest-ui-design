
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import AssociationTable from './associations/AssociationTable';
import MobileAssociationCard from './associations/MobileAssociationCard';
import AssociationsPagination from './associations/AssociationsPagination';
import { Association, AssociationsTabProps } from './associations/types';
import { mockAssociations } from './associations/mockData';

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
    <Card>
      <CardHeader>
        <CardTitle>Active Associations</CardTitle>
        <CardDescription>Organizations and individuals with active access permissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isMobile ? (
            <div className="space-y-4">
              {paginatedAssociations.map((association) => (
                <MobileAssociationCard 
                  key={association.id}
                  association={association}
                  onCommissionAccessChange={handleCommissionAccessChange}
                  onEnabledChange={handleEnabledChange}
                />
              ))}
            </div>
          ) : (
            <AssociationTable 
              associations={associations} 
              startIndex={startIndex} 
              pageSize={pageSize}
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
  );
};

export default AssociationsTab;
