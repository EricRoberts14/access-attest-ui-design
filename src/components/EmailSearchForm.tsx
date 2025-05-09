
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Search, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailSearchFormProps {
  onSearch: (email: string, exists: boolean, accountData?: {name: string, email: string, type: string}) => void;
  onClose: () => void;
}

const EmailSearchForm = ({ onSearch, onClose }: EmailSearchFormProps) => {
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSearch = () => {
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    
    // Simulate API call to check if the email exists
    setTimeout(() => {
      // Mock data - in a real app, this would be an API call
      const mockExistingEmails = [
        { email: "john@example.com", name: "John Doe", type: "individual" },
        { email: "acme@example.com", name: "Acme Corp", type: "organization" },
      ];
      
      const existingAccount = mockExistingEmails.find(account => account.email === email);
      
      if (existingAccount) {
        toast({
          title: "Account Found",
          description: `Found an existing account for ${existingAccount.name}`,
        });
        onSearch(email, true, existingAccount);
      } else {
        toast({
          title: "No Account Found",
          description: "No existing account found with this email",
        });
        onSearch(email, false);
      }
      
      setIsSearching(false);
    }, 1000);
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
      <CardContent className="space-y-3 p-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="flex gap-2">
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <p className="text-xs text-muted-foreground">
            We'll check if an account with this email already exists in the system
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between px-2 py-2">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSearching}>
          {isSearching ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Search
            </>
          )}
        </Button>
      </CardFooter>
    </form>
  );
};

export default EmailSearchForm;
