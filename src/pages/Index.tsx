import React, { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AlpineCounter from '@/components/alpine/AlpineCounter';

const Index = () => {
  const [activeTab, setActiveTab] = useState("associations");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <div className="container mx-auto">
            <Dashboard activeTab={activeTab} onTabChange={setActiveTab} />
            
            {/* Alpine.js Demo Section */}
            <div className="p-3 sm:p-6 border-t">
              <h2 className="text-xl font-semibold mb-4">Alpine.js Integration Demo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Alpine.js Counter</h3>
                  <AlpineCounter initialCount={5} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
