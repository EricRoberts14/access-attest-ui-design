
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useToast } from "@/hooks/use-toast";
import AttestationStatus from './AttestationStatus';

// Define a type for the association entity
type Association = {
  id: number;
  name: string;
  accountHolder: string;
  accountEmail: string;
  contractType: 'RIA' | 'Agent';
  lastAttested: string;
  status: 'valid' | 'pending' | 'expired';
  commissionAccess: boolean;
  enabled: boolean;
};

interface AssociationsTabProps {
  onCreateNew?: () => void;
}

const AssociationsTab = ({ onCreateNew }: AssociationsTabProps) => {
  const { toast } = useToast();
  // Sample data
  const [associations, setAssociations] = useState<Association[]>([
    { id: 1, name: 'Acme Corporation', accountHolder: 'James Wilson', accountEmail: 'james.wilson@acme.com', contractType: 'RIA', lastAttested: 'May 1, 2025', status: 'valid', commissionAccess: true, enabled: true },
    { id: 2, name: 'James Smith', accountHolder: 'James Smith', accountEmail: 'james.smith@example.com', contractType: 'Agent', lastAttested: 'May 20, 2025', status: 'valid', commissionAccess: false, enabled: true },
    { id: 3, name: 'Global Tech Partners', accountHolder: 'Michael Johnson', accountEmail: 'michael.johnson@globaltech.com', contractType: 'RIA', lastAttested: 'November 30, 2024', status: 'pending', commissionAccess: true, enabled: true },
    { id: 4, name: 'Sarah Johnson', accountHolder: 'Sarah Johnson', accountEmail: 'sarah.johnson@example.com', contractType: 'Agent', lastAttested: 'November 25, 2024', status: 'expired', commissionAccess: false, enabled: true },
  ]);
  
  // Track which row is being edited
  const [editingId, setEditingId] = useState<number | null>(null);
  
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
  
  // Handle commission access change
  const handleCommissionAccessChange = (id: number, value: boolean) => {
    setAssociations(associations.map(assoc => 
      assoc.id === id ? { ...assoc, commissionAccess: value } : assoc
    ));
  };
  
  // Handle enabled state change
  const handleEnabledChange = (id: number, value: boolean) => {
    setAssociations(associations.map(assoc => 
      assoc.id === id ? { ...assoc, enabled: value } : assoc
    ));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Active Associations</CardTitle>
          <CardDescription>Organizations and individuals with active access permissions</CardDescription>
        </div>
        <Button onClick={onCreateNew}>Create New Association</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-xs font-medium text-left p-3">Account Holder</th>
                  <th className="text-xs font-medium text-left p-3">Entity Name</th>
                  <th className="text-xs font-medium text-left p-3">Contract Type</th>
                  <th className="text-xs font-medium text-left p-3">Last Attested</th>
                  <th className="text-xs font-medium text-left p-3">Status</th>
                  <th className="text-xs font-medium text-left p-3">Commission Access</th>
                  <th className="text-xs font-medium text-left p-3">Enabled</th>
                  <th className="text-xs font-medium text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {associations.map((association) => (
                  <tr key={association.id}>
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
                          onValueChange={(value) => handleCommissionAccessChange(association.id, value === "yes")}
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
                            onCheckedChange={(checked) => handleEnabledChange(association.id, checked)}
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
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <div className="text-sm">Page 1 of 3</div>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
};

export default AssociationsTab;
