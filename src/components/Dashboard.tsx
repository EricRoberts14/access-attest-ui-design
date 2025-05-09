
import React, { useState } from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import DashboardSummaryCards from './dashboard/DashboardSummaryCards';
import DashboardTabs from './dashboard/DashboardTabs';
import CreateAssociationDialog from './dashboard/CreateAssociationDialog';

interface DashboardProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Dashboard = ({ activeTab = "associations", onTabChange }: DashboardProps) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateNewAssociation = () => {
    setShowCreateForm(true);
  };
  
  const handleCloseDialog = () => {
    setShowCreateForm(false);
  };

  const handleTabChange = (value: string) => {
    if (onTabChange) {
      onTabChange(value);
    }
  };
  
  const navigateToAttestations = () => {
    handleTabChange("attestations");
  };
  
  return (
    <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
      <DashboardHeader onCreateAssociation={handleCreateNewAssociation} />
      
      <CreateAssociationDialog 
        open={showCreateForm} 
        onClose={handleCloseDialog} 
      />
      
      <DashboardSummaryCards onNavigateToAttestations={navigateToAttestations} />
      
      <DashboardTabs 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
        onCreateNew={handleCreateNewAssociation}
      />
    </div>
  );
};

export default Dashboard;
