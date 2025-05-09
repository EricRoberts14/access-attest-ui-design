
import React, { useRef, useEffect } from 'react';
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
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabsContentRef = useRef<HTMLDivElement>(null);
  
  // Scroll tab into view when active tab changes
  useEffect(() => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (tabsContentRef.current) {
      tabsContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    onTabChange(value);
    // Additional scroll to tab content will be triggered by useEffect
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList ref={tabsListRef} className="grid grid-cols-3 mb-4 sm:mb-6">
        <TabsTrigger value="associations">Associations</TabsTrigger>
        <TabsTrigger value="attestations">Attestations</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      
      <div ref={tabsContentRef}>
        <TabsContent value="associations" className="space-y-4">
          <AssociationsTab onCreateNew={onCreateNew} />
        </TabsContent>
        
        <TabsContent value="attestations">
          <AttestationsTab />
        </TabsContent>
        
        <TabsContent value="history">
          <HistoryTab />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default DashboardTabs;
