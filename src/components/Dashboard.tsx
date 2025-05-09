
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DashboardSummary from './dashboard/DashboardSummary';
import AssociationsTab from './dashboard/AssociationsTab';
import AttestationsTab from './dashboard/AttestationsTab';
import HistoryTab from './dashboard/HistoryTab';
import CreateAssociationForm from './CreateAssociationForm';
import EmailSearchForm from './EmailSearchForm';

const Dashboard = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [emailSearchCompleted, setEmailSearchCompleted] = useState(false);
  const [searchedEmail, setSearchedEmail] = useState('');
  const [existingAccount, setExistingAccount] = useState<{name: string, email: string, type: string} | null>(null);
  
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
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Access Management Dashboard</h1>
          <p className="text-muted-foreground">Manage your account associations and attestations</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline">Export</Button>
          <Button onClick={() => setShowCreateForm(true)}>Create New Association</Button>
        </div>
      </div>
      
      {/* Dialog for creating a new association */}
      <Dialog open={showCreateForm} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {!emailSearchCompleted 
                ? "Enter Email Address" 
                : existingAccount 
                  ? "Existing Account Found" 
                  : "Create New Association"
              }
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
      
      {/* Dashboard Summary Card */}
      <DashboardSummary />
      
      {/* Main Tabs */}
      <Tabs defaultValue="associations" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
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
