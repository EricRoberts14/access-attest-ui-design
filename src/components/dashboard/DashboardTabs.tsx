
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssociationsTab from './AssociationsTab';
import AttestationsTab from './AttestationsTab';
import HistoryTab from './HistoryTab';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onCreateNew: () => void;
}

const DashboardTabs = ({ activeTab, onTabChange, onCreateNew }: DashboardTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid grid-cols-3 mb-4 sm:mb-6">
        <TabsTrigger value="associations">Associations</TabsTrigger>
        <TabsTrigger value="attestations">Attestations</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      
      <TabsContent value="associations" className="space-y-4">
        <AssociationsTab onCreateNew={onCreateNew} />
      </TabsContent>
      
      <TabsContent value="attestations">
        <AttestationsTab />
      </TabsContent>
      
      <TabsContent value="history">
        <HistoryTab />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
