
import React from 'react';
import { User, Link as LinkIcon, Check, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  icon: React.ElementType;
  text: string;
  active?: boolean;
  notification?: number;
  onClick?: () => void;
}

const NavItem = ({ icon: Icon, text, active, notification, onClick }: NavItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-colors",
        active 
          ? "bg-massmutual-blue text-white" 
          : "hover:bg-massmutual-gray-light hover:text-massmutual-orange text-white font-medium"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium flex-1">{text}</span>
      {notification && (
        <span className="rounded-full bg-massmutual-orange text-white text-xs px-2 py-0.5">
          {notification}
        </span>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = React.useState<string>("myaccount");

  // We need to set up a global state handler for the active tab
  // This will be used by both components to stay in sync
  React.useEffect(() => {
    // Define a function to handle custom events for tab changes
    const handleTabChange = (event: CustomEvent<string>) => {
      setActiveTab(event.detail);
    };

    // Add event listener for tab changes
    window.addEventListener('tabChange' as any, handleTabChange as EventListener);

    // Cleanup function
    return () => {
      window.removeEventListener('tabChange' as any, handleTabChange as EventListener);
    };
  }, []);

  // Function to change tabs and dispatch event
  const changeTab = (tabName: string) => {
    setActiveTab(tabName);
    // Dispatch event to notify other components
    const event = new CustomEvent('tabChange', { detail: tabName });
    window.dispatchEvent(event);
    
    // Only scroll when a tab is clicked, not on page load
    const tabsList = document.querySelector('.tabs-list');
    if (tabsList) {
      tabsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // Change handlers for each tab
  const handleMyAccountClick = () => changeTab("myaccount");
  const handleAssociationsClick = () => changeTab("associations");
  const handleAttestationsClick = () => changeTab("attestations");
  const handleHistoryClick = () => changeTab("history");

  return (
    <aside className="bg-massmutual-blue-dark w-64 min-h-screen py-6 flex flex-col h-full z-30 pt-16">
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-white mb-1">Access Attest</h2>
        <p className="text-xs text-gray-300">Access Management System</p>
      </div>
      
      <div className="space-y-1 px-3 flex-1 overflow-y-auto scrollbar-hide">
        <NavItem 
          icon={User} 
          text="My Account" 
          active={activeTab === "myaccount"} 
          onClick={handleMyAccountClick}
        />
        <NavItem 
          icon={LinkIcon} 
          text="Associations" 
          active={activeTab === "associations"}
          onClick={handleAssociationsClick} 
        />
        <NavItem 
          icon={Check} 
          text="Attestations" 
          notification={8} 
          active={activeTab === "attestations"}
          onClick={handleAttestationsClick} 
        />
        <NavItem 
          icon={Clock} 
          text="History" 
          active={activeTab === "history"}
          onClick={handleHistoryClick} 
        />
      </div>
      
      <div className="mt-auto px-4 pt-6 border-t border-massmutual-blue">
        <div className="bg-massmutual-blue rounded-md p-4">
          <h4 className="text-sm font-medium text-white mb-2">Current Attestation Period</h4>
          <p className="text-xs text-gray-300 mb-2">May 1-31, 2025</p>
          <div className="h-1.5 w-full bg-massmutual-blue-light/30 rounded-full overflow-hidden">
            <div className="h-full bg-massmutual-orange w-3/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
