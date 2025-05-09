
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardHeaderProps {
  onCreateAssociation: () => void;
}

const DashboardHeader = ({ onCreateAssociation }: DashboardHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Access Management Dashboard</h1>
        <p className="text-muted-foreground text-sm">Manage your account associations and attestations</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" size={isMobile ? "sm" : "default"}>Export</Button>
        <Button onClick={onCreateAssociation} size={isMobile ? "sm" : "default"}>Create New Association</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
