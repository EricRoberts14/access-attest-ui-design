
import React from 'react';
import { History } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HistoryData } from './types';

interface HistoryTableProps {
  historyData: HistoryData[];
}

const HistoryTable = ({ historyData }: HistoryTableProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="text-xs font-medium text-left p-3">Account Holder</th>
            <th className="text-xs font-medium text-left p-3">Association(s)</th>
            <th className="text-xs font-medium text-left p-3">Contract Type</th>
            <th className="text-xs font-medium text-left p-3">Commission Access</th>
            <th className="text-xs font-medium text-left p-3">Enabled</th>
            <th className="text-xs font-medium text-left p-3">Attested Date</th>
            <th className="text-xs font-medium text-left p-3">Attested By</th>
            <th className="text-xs font-medium text-left p-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {historyData.map((item) => (
            <tr key={item.id} className="hover:bg-muted/50">
              <td className="p-3 text-sm">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="cursor-help underline decoration-dotted">
                      {item.accountHolder}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <div className="text-sm">
                      <p className="font-medium">{item.accountEmail}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </td>
              <td className="p-3 text-sm">{item.entityName}</td>
              <td className="p-3 text-sm">{item.contractType}</td>
              <td className="p-3 text-sm">{item.commissionAccess}</td>
              <td className="p-3 text-sm">{item.enabled ? "Enabled" : "Disabled"}</td>
              <td className="p-3 text-sm">
                <div className="flex items-center gap-2">
                  <History className="h-4 w-4 text-muted-foreground" />
                  {item.attestedDate}
                </div>
              </td>
              <td className="p-3 text-sm">{item.attestedBy}</td>
              <td className="p-3">
                <Badge variant={item.action === 'Approved' ? 'outline' : 'destructive'}>
                  {item.action}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
