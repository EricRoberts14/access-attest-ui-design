
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Association } from './types';
import AttestationStatus from '../AttestationStatus';
import { Badge } from '@/components/ui/badge';
import { User } from "lucide-react";

interface AssociationAccordionProps {
  associations: Association[];
  onCommissionAccessChange: (id: number, value: boolean) => void;
  onEnabledChange: (id: number, value: boolean) => void;
}

const AssociationAccordion = ({
  associations,
  onCommissionAccessChange,
  onEnabledChange
}: AssociationAccordionProps) => {
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Group associations by account holder
  const groupedAssociations = associations.reduce((groups: Record<string, Association[]>, association) => {
    const key = association.accountHolder;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(association);
    return groups;
  }, {});
  
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
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(groupedAssociations).map(([accountHolder, accountAssociations]) => {
        // Use first association for account holder details
        const accountDetails = accountAssociations[0];
        
        return (
          <AccordionItem key={accountHolder} value={accountHolder}>
            <AccordionTrigger className="hover:bg-muted/50 px-4 py-3 rounded-md">
              <div className="flex w-full items-center justify-between pr-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-base">{accountDetails.accountHolder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal bg-muted/40 hover:bg-muted">
                      {accountDetails.accountEmail}
                    </Badge>
                    {accountDetails.userName && (
                      <Badge variant="outline" className="font-normal bg-muted/60 hover:bg-muted">
                        {accountDetails.userName}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="border rounded-lg overflow-hidden mt-2">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-xs font-medium text-left p-3">Association(s)</th>
                      <th className="text-xs font-medium text-left p-3">Contract Type</th>
                      <th className="text-xs font-medium text-left p-3">Attestation Status</th>
                      <th className="text-xs font-medium text-left p-3">Commission Access</th>
                      <th className="text-xs font-medium text-left p-3">Enabled</th>
                      <th className="text-xs font-medium text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {accountAssociations.map((association) => (
                      <tr key={association.id} className="hover:bg-muted/50">
                        <td className="p-3 text-sm">{association.name}</td>
                        <td className="p-3 text-sm">{association.contractType}</td>
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
                              <Label>{association.enabled ? "Yes" : "No"}</Label>
                            </div>
                          ) : (
                            association.enabled ? "Yes" : "No"
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
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AssociationAccordion;
