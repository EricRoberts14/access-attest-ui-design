
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import DashboardSummary from './dashboard/DashboardSummary';
import DelegateInfoCard from './dashboard/DelegateInfoCard';
import AssociationsTab from './dashboard/AssociationsTab';
import AttestationsTab from './dashboard/AttestationsTab';
import HistoryTab from './dashboard/HistoryTab';
import CreateAssociationForm from './association/CreateAssociationForm';
import EmailSearchForm from './EmailSearchForm';

interface DashboardProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Dashboard = ({ activeTab = "associations", onTabChange }: DashboardProps) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [emailSearchCompleted, setEmailSearchCompleted] = useState(false);
  const [searchedEmail, setSearchedEmail] = useState('');
  const [existingAccount, setExistingAccount] = useState<{name: string, email: string, type: string} | null>(null);
  const isMobile = useIsMobile();
  
  const handleEmailSearch = (email: string, exists: boolean, accountData?: {name: string, email: string, type: string}) => {
    setSearchedEmail(email);
    setEmailSearchCompleted(true);
    setExistingAccount(accountData || null);
  };
  
  const handleCloseDialog = () => {
    setShowCreateForm(false);
    setEmailSearchCompleted(false);
    setSearchedEmail('');
    setExistingAccount(null);
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
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Access Management Dashboard</h1>
          <p className="text-muted-foreground text-sm">Manage your account associations and attestations</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size={isMobile ? "sm" : "default"}>Export</Button>
          <Button onClick={() => setShowCreateForm(true)} size={isMobile ? "sm" : "default"}>Create New Association</Button>
        </div>
      </div>
      
      {/* Dialog for creating a new association */}
      <Dialog open={showCreateForm} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Create New Association
            </DialogTitle>
            <DialogDescription>
              {!emailSearchCompleted 
                ? "Enter an email address to check if an account already exists" 
                : existingAccount 
                  ? `Create a new association with the existing account for ${existingAccount.email}`
                  : `Create a new association for ${searchedEmail}`
              }
            </DialogDescription>
          </DialogHeader>
          
          {!emailSearchCompleted ? (
            <EmailSearchForm onSearch={handleEmailSearch} onClose={handleCloseDialog} />
          ) : existingAccount ? (
            <CreateAssociationForm 
              onClose={handleCloseDialog} 
              existingEntity={{
                entityName: existingAccount.name,
                entityEmail: existingAccount.email,
                entityType: existingAccount.type
              }}
            />
          ) : (
            <CreateAssociationForm 
              onClose={handleCloseDialog} 
              prefillEmail={searchedEmail}
            />
          )}
        </DialogContent>
      </Dialog>
      
      {/* Dashboard Summary Cards */}
      <div className="flex flex-col sm:flex-row gap-4">
        <DashboardSummary onNavigateToAttestations={navigateToAttestations} />
        <DelegateInfoCard />
      </div>
      
      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4 sm:mb-6">
          <TabsTrigger value="associations">Associations</TabsTrigger>
          <TabsTrigger value="attestations">Attestations</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="associations" className="space-y-4">
          <AssociationsTab onCreateNew={() => setShowCreateForm(true)} />
        </TabsContent>
        
        <TabsContent value="attestations">
          <AttestationsTab />
        </TabsContent>
        
        <TabsContent value="history">
          <HistoryTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
