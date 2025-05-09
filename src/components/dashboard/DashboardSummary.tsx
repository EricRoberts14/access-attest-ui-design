
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';

const DashboardSummary = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Current Attestation Period</CardTitle>
        <CardDescription>May 1-31, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">14 items require attestation</span>
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
              <Badge variant="outline" className="bg-attestation-pending/10 text-attestation-pending">8</Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">Prepare All Attestations</Button>
      </CardFooter>
    </Card>
  );
};

export default DashboardSummary;
