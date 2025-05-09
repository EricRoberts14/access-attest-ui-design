
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useToast } from "@/hooks/use-toast";
import AttestationStatus from '../AttestationStatus';
import { Association } from './types';

interface AssociationTableProps {
  associations: Association[];
  startIndex: number;
  pageSize: number;
  onCommissionAccessChange: (id: number, value: boolean) => void;
  onEnabledChange: (id: number, value: boolean) => void;
}

const AssociationTable = ({
  associations,
  startIndex,
  pageSize,
  onCommissionAccessChange,
  onEnabledChange
}: AssociationTableProps) => {
  const { toast } = useToast();
  // Track which row is being edited
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Get only the associations for the current page
  const paginatedAssociations = associations.slice(startIndex, startIndex + pageSize);
  
  // Toggle edit mode for a row
  const toggleEdit = (id: number) => {
    if (editingId === id) {
      // Save changes
      toast({
        title: "Changes saved",
        description: "Association settings have been updated",
      });
      setEditingId(null);
    } else {
      setEditingId(id);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="text-xs font-medium text-left p-3">Account Holder</th>
            <th className="text-xs font-medium text-left p-3">Association(s)</th>
            <th className="text-xs font-medium text-left p-3">Contract Type</th>
            <th className="text-xs font-medium text-left p-3">Last Attested</th>
            <th className="text-xs font-medium text-left p-3">Status</th>
            <th className="text-xs font-medium text-left p-3">Commission Access</th>
            <th className="text-xs font-medium text-left p-3">Enabled</th>
            <th className="text-xs font-medium text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {paginatedAssociations.map((association) => (
            <tr key={association.id} className="hover:bg-muted/50">
              <td className="p-3 text-sm">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="cursor-help underline decoration-dotted">
                      {association.accountHolder}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <div className="text-sm">
                      <p className="font-medium">{association.accountEmail}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </td>
              <td className="p-3 text-sm">{association.name}</td>
              <td className="p-3 text-sm">{association.contractType}</td>
              <td className="p-3 text-sm">{association.lastAttested}</td>
              <td className="p-3">
                <AttestationStatus status={association.status} />
              </td>
              <td className="p-3 text-sm">
                {editingId === association.id ? (
                  <RadioGroup 
                    defaultValue={association.commissionAccess ? "yes" : "no"}
                    className="flex gap-4"
                    onValueChange={(value) => onCommissionAccessChange(association.id, value === "yes")}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id={`yes-${association.id}`} />
                      <Label htmlFor={`yes-${association.id}`}>Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id={`no-${association.id}`} />
                      <Label htmlFor={`no-${association.id}`}>No</Label>
                    </div>
                  </RadioGroup>
                ) : (
                  association.commissionAccess ? "Yes" : "No"
                )}
              </td>
              <td className="p-3 text-sm">
                {editingId === association.id ? (
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={association.enabled}
                      onCheckedChange={(checked) => onEnabledChange(association.id, checked)}
                    />
                    <Label>{association.enabled ? "Enabled" : "Disabled"}</Label>
                  </div>
                ) : (
                  association.enabled ? "Enabled" : "Disabled"
                )}
              </td>
              <td className="p-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleEdit(association.id)}
                >
                  {editingId === association.id ? "Save" : "Manage"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssociationTable;
