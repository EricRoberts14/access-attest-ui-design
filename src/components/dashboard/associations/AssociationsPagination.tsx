
import React from 'react';
import HistoryPagination from '../history/HistoryPagination';

interface AssociationsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (page: number) => void;
}

const AssociationsPagination = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  onPageChange
}: AssociationsPaginationProps) => {
  return (
    <HistoryPagination 
      currentPage={currentPage}
      totalPages={totalPages}
      onPreviousPage={onPreviousPage}
      onNextPage={onNextPage}
      onPageChange={onPageChange}
    />
  );
};

export default AssociationsPagination;
