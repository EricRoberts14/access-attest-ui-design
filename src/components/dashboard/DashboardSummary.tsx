
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';

const DashboardSummary = () => {
  // Update to match the 8 pending attestations shown in AttestationsTab
  const pendingCount = 8;
  
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Current Attestation Period</CardTitle>
        <CardDescription>May 1-31, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">{pendingCount} items require attestation</span>
        </div>
        <Progress value={42} className="h-2 mb-5" />
        
        <div className="space-y-4 mt-3">
          <h3 className="text-sm font-medium">Accounts</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Accounts</span>
              <span className="font-medium">20</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Pending Attestations</span>
              <Badge variant="outline" className="bg-attestation-pending/10 text-attestation-pending">{pendingCount}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSummary;
