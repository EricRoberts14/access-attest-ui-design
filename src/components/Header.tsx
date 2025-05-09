
import React from 'react';
import { Bell, User, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="h-16 border-b border-slate-200 px-3 sm:px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-lg sm:text-xl font-bold text-primary">Access Attest</h1>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
            3
          </Badge>
        </Button>
        
        {!isMobile && (
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        )}
        
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div className={isMobile ? "hidden" : "block"}>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
