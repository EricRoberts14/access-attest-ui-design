
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("myaccount");
  const isMobile = useIsMobile();
  
  // Show notification toast when the page loads
  useEffect(() => {
    toast({
      title: "Attestation Period Active",
      description: "The current attestation period ends May 31, 2025.",
      duration: 5000,
    });

    // Set up event listener for tab changes from sidebar
    const handleTabChange = (event: CustomEvent<string>) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('tabChange' as any, handleTabChange as EventListener);

    return () => {
      window.removeEventListener('tabChange' as any, handleTabChange as EventListener);
    };
  }, [toast]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Dispatch event to notify sidebar
    const event = new CustomEvent('tabChange', { detail: tab });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        {isMobile ? (
          <>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="fixed bottom-4 left-4 z-40 bg-primary text-white rounded-full shadow-lg">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[85%] sm:w-[300px] border-r">
                <Sidebar />
              </SheetContent>
            </Sheet>
            <main className="flex-1 overflow-auto w-full">
              <Dashboard activeTab={activeTab} onTabChange={handleTabChange} />
            </main>
          </>
        ) : (
          <>
            <div className="w-64 fixed top-0 left-0 h-full">
              <Sidebar />
            </div>
            <main className="flex-1 overflow-auto w-full ml-64">
              <Dashboard activeTab={activeTab} onTabChange={handleTabChange} />
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
