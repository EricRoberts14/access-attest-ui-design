
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import HistoryTable from './history/HistoryTable';
import HistoryPagination from './history/HistoryPagination';
import { historyAttestations } from './history/mockData';

const HistoryTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Calculate pagination
  const totalPages = Math.ceil(historyAttestations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedHistory = historyAttestations.slice(startIndex, startIndex + pageSize);

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
    <Card>
      <CardHeader>
        <CardTitle>Attestation History</CardTitle>
        <CardDescription>Record of past attestation activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <HistoryTable historyData={paginatedHistory} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <HistoryPagination
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

export default HistoryTab;
