
import React, { useEffect, useRef } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface AlpineFilterProps {
  onFilterChange?: (filter: string) => void;
  className?: string;
}

const AlpineFilter: React.FC<AlpineFilterProps> = ({ onFilterChange, className = '' }) => {
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Alpine component when mounted
    if (filterRef.current && window.Alpine) {
      window.Alpine.initTree(filterRef.current);
    }
  }, []);

  // Handle passing filter value back to React if needed
  useEffect(() => {
    if (onFilterChange && filterRef.current) {
      const inputEl = filterRef.current.querySelector('input');
      if (inputEl) {
        const handler = () => onFilterChange(inputEl.value);
        inputEl.addEventListener('input', handler);
        return () => inputEl.removeEventListener('input', handler);
      }
    }
  }, [onFilterChange]);

  return (
    <div 
      ref={filterRef}
      className={`${className}`}
      data-x-data="{ filter: '' }"
    >
      <div className="relative">
        <Label htmlFor="association-filter" className="sr-only">Filter associations</Label>
        <Input
          id="association-filter"
          type="text"
          data-x-model="filter"
          placeholder="Search associations..."
          className="w-full"
        />
        <button 
          data-x-show="filter.length > 0"
          data-x-on-click="filter = ''"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        <span>Filtering by: </span>
        <span data-x-text="filter || 'none'" className="font-medium"></span>
      </div>
    </div>
  );
};

export default AlpineFilter;
