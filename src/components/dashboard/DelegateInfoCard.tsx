
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DelegateInfoCard = () => {
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-massmutual-blue-dark">Delegation Authority</CardTitle>
        <CardDescription>You are authorized as a delegate</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <UsersIcon className="h-5 w-5 text-massmutual-orange" />
          <span className="text-sm">You can assign associations on behalf of</span>
        </div>
        
        <div className="border border-massmutual-gray-light rounded-md p-3 bg-massmutual-gray-light/10 mb-5">
          <h4 className="font-medium text-massmutual-blue-dark mb-1">Raymond James LLC</h4>
          <p className="text-sm text-muted-foreground">As a delegate, you can create and manage associations for this entity</p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-massmutual-blue-dark">Delegation Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Delegate Type</span>
              <span className="font-medium">Full Access</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status</span>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DelegateInfoCard;
