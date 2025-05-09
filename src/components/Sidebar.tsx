
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
        active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent text-sidebar-foreground"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium flex-1">{text}</span>
      {notification && (
        <span className="rounded-full bg-red-500 text-white text-xs px-2 py-0.5">
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

  return (
    <aside className="bg-sidebar w-64 min-h-screen py-6 flex flex-col">
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-sidebar-foreground mb-1">Access Attest</h2>
        <p className="text-xs text-sidebar-foreground/70">Access Management System</p>
      </div>
      
      <div className="space-y-1 px-3 flex-1">
        <NavItem icon={User} text="My Account" active={true} />
        <NavItem icon={LinkIcon} text="Associations" />
        <NavItem icon={Check} text="Attestations" notification={8} onClick={handleAttestationsClick} />
        <NavItem icon={Clock} text="History" />
      </div>
      
      <div className="mt-auto px-4 pt-6 border-t border-sidebar-border">
        <div className="bg-sidebar-accent rounded-md p-4">
          <h4 className="text-sm font-medium text-sidebar-foreground mb-2">Current Attestation Period</h4>
          <p className="text-xs text-sidebar-foreground/70 mb-2">May 1-31, 2025</p>
          <div className="h-1.5 w-full bg-sidebar-border rounded-full overflow-hidden">
            <div className="h-full bg-attestation-pending w-3/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
