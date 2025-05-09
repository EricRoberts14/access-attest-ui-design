
import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from 'react';

const Index = () => {
  const { toast } = useToast();
  
  // Show notification toast when the page loads
  useEffect(() => {
    toast({
      title: "Attestation Period Active",
      description: "The current attestation period ends May 31, 2025.",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
