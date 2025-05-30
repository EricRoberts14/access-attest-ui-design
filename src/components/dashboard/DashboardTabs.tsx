
import React, { useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssociationsTab from './AssociationsTab';
import AttestationsTab from './AttestationsTab';
import HistoryTab from './HistoryTab';
import MyAccountTab from './MyAccountTab';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onCreateNew: () => void;
}

const DashboardTabs = ({ activeTab, onTabChange, onCreateNew }: DashboardTabsProps) => {
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabsContentRef = useRef<HTMLDivElement>(null);
  const isInitialLoadRef = useRef(true);
  
  // Only scroll tab into view when active tab changes and it's not the initial load
  useEffect(() => {
    // Skip scrolling on the initial render
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }
    
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
      <TabsList ref={tabsListRef} className="grid grid-cols-4 mb-4 sm:mb-6">
        <TabsTrigger value="myaccount">My Account</TabsTrigger>
        <TabsTrigger value="associations">Associations</TabsTrigger>
        <TabsTrigger value="attestations">Attestations</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      
      <div ref={tabsContentRef}>
        <TabsContent value="myaccount" className="space-y-4">
          <MyAccountTab />
        </TabsContent>
        
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
