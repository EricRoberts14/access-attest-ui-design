
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
          : "hover:bg-massmutual-gray-light text-white"
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
  // Function to click on attestations tab
  const handleAttestationsClick = () => {
    // Find the attestations tab and click it
    const attestationsTab = document.querySelector('[value="attestations"]');
    if (attestationsTab) {
      (attestationsTab as HTMLElement).click();
    }
  };

  // Function to click on history tab
  const handleHistoryClick = () => {
    // Find the history tab and click it
    const historyTab = document.querySelector('[value="history"]');
    if (historyTab) {
      (historyTab as HTMLElement).click();
    }
  };

  return (
    <aside className="bg-massmutual-blue-dark w-64 min-h-screen py-6 flex flex-col">
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-white mb-1">Access Attest</h2>
        <p className="text-xs text-gray-300">Access Management System</p>
      </div>
      
      <div className="space-y-1 px-3 flex-1">
        <NavItem icon={User} text="My Account" active={true} />
        <NavItem icon={LinkIcon} text="Associations" />
        <NavItem icon={Check} text="Attestations" notification={8} onClick={handleAttestationsClick} />
        <NavItem icon={Clock} text="History" onClick={handleHistoryClick} />
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
