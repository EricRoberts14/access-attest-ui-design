
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HistoryData } from './types';

interface MobileHistoryCardProps {
  historyItem: HistoryData;
}

const MobileHistoryCard = ({ historyItem }: MobileHistoryCardProps) => {
  return (
    <Card key={historyItem.id} className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-base flex justify-between items-center">
          <span>{historyItem.accountHolder}</span>
          <Badge variant={historyItem.action === 'Approved' ? 'outline' : 'destructive'}>
            {historyItem.action}
          </Badge>
        </CardTitle>
        <CardDescription className="text-xs mt-1">{historyItem.accountEmail}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <dl className="grid grid-cols-2 gap-1 text-sm">
          <dt className="text-xs font-medium text-muted-foreground">Association</dt>
          <dd>{historyItem.entityName}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Contract Type</dt>
          <dd>{historyItem.contractType}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Commission Access</dt>
          <dd>{historyItem.commissionAccess}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Enabled</dt>
          <dd>{historyItem.enabled ? "Yes" : "No"}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Attested Date</dt>
          <dd className="flex items-center gap-1">
            <History className="h-3 w-3 text-muted-foreground" />
            {historyItem.attestedDate}
          </dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Attested By</dt>
          <dd>{historyItem.attestedBy}</dd>
        </dl>
      </CardContent>
    </Card>
  );
};

export default MobileHistoryCard;
