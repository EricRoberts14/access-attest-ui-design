
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';

interface DashboardSummaryProps {
  onNavigateToAttestations?: () => void;
}

const DashboardSummary = ({ onNavigateToAttestations }: DashboardSummaryProps) => {
  // Update to match the 8 pending attestations shown in AttestationsTab
  const pendingCount = 8;
  const totalAccounts = 20;
  const completedCount = totalAccounts - pendingCount;
  const progressPercentage = (completedCount / totalAccounts) * 100;
  
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-massmutual-blue-dark">Current Attestation Period</CardTitle>
        <CardDescription>May 1-31, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className="flex items-center gap-2 mb-3 cursor-pointer hover:text-massmutual-orange transition-colors" 
          onClick={onNavigateToAttestations}
          role="button"
          tabIndex={0}
          aria-label="View pending attestations"
        >
          <Calendar className="h-5 w-5 text-massmutual-orange" />
          <span className="text-sm">{pendingCount} items require attestation</span>
        </div>
        <Progress value={progressPercentage} className="h-2 mb-5 bg-massmutual-gray [&>div]:bg-massmutual-orange" />
        
        <div className="space-y-4 mt-3">
          <h3 className="text-sm font-medium text-massmutual-blue-dark">Accounts</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Accounts</span>
              <span className="font-medium">{totalAccounts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Pending Attestations</span>
              <Badge 
                variant="outline" 
                className="bg-massmutual-orange/10 text-massmutual-orange cursor-pointer hover:bg-massmutual-orange/20 transition-colors"
                onClick={onNavigateToAttestations}
                role="button"
                tabIndex={0}
                aria-label="View pending attestations"
              >
                {pendingCount}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSummary;
