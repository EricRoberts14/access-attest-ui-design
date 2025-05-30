
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import AttestationPagination from './attestations/AttestationPagination';
import { mockPendingAttestations } from './attestations/mockData';
import AttestationAccordion from './attestations/AttestationAccordion';
import MobileAttestationAccordion from './attestations/MobileAttestationAccordion';

const AttestationsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const isMobile = useIsMobile();

  // Calculate pagination
  const totalPages = Math.ceil(mockPendingAttestations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedAttestations = mockPendingAttestations.slice(startIndex, startIndex + pageSize);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Required Attestations</CardTitle>
        <CardDescription>Access permissions requiring periodic attestation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isMobile ? (
            <MobileAttestationAccordion attestations={paginatedAttestations} />
          ) : (
            <AttestationAccordion attestations={paginatedAttestations} />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between overflow-auto">
        <AttestationPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          onPageChange={handlePageChange}
        />
      </CardFooter>
    </Card>
  );
};

export default AttestationsTab;
