
import React from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useIsMobile } from '@/hooks/use-mobile';

interface AttestationPaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (page: number) => void;
}

const AttestationPagination = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  onPageChange
}: AttestationPaginationProps) => {
  const isMobile = useIsMobile();

  return (
    <Pagination>
      <PaginationContent className="flex-wrap">
        <PaginationItem>
          <PaginationPrevious 
            onClick={onPreviousPage} 
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} 
          />
        </PaginationItem>
        {!isMobile && Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink 
              isActive={page === currentPage} 
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext 
            onClick={onNextPage} 
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""} 
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AttestationPagination;
