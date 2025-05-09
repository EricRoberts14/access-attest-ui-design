
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DashboardSummary from './dashboard/DashboardSummary';
import AssociationsTab from './dashboard/AssociationsTab';
import AttestationsTab from './dashboard/AttestationsTab';
import HistoryTab from './dashboard/HistoryTab';
import CreateAssociationForm from './CreateAssociationForm';

const Dashboard = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  
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
      <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Association</DialogTitle>
            <DialogDescription>
              Create a new access association between your account and an organization or individual
            </DialogDescription>
          </DialogHeader>
          <CreateAssociationForm onClose={() => setShowCreateForm(false)} />
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
