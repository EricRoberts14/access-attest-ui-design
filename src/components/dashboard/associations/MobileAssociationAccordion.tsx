
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { Association } from './types';
import AttestationStatus from '../AttestationStatus';
import { Badge } from '@/components/ui/badge';
import { User } from "lucide-react";

interface MobileAssociationAccordionProps {
  associations: Association[];
  onCommissionAccessChange: (id: number, value: boolean) => void;
  onEnabledChange: (id: number, value: boolean) => void;
}

const MobileAssociationAccordion = ({
  associations,
  onCommissionAccessChange,
  onEnabledChange
}: MobileAssociationAccordionProps) => {
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
          <AccordionItem key={accountHolder} value={accountHolder} className="border rounded-md mb-2">
            <AccordionTrigger className="hover:bg-muted/50 px-3 py-2.5 rounded-md">
              <div className="flex w-full flex-col sm:flex-row sm:items-center text-left">
                <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-0">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{accountDetails.accountHolder}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-normal text-xs bg-muted/40 hover:bg-muted">
                      {accountDetails.accountEmail}
                    </Badge>
                    {accountDetails.userName && (
                      <Badge variant="outline" className="font-normal text-xs bg-muted/60 hover:bg-muted">
                        {accountDetails.userName}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 py-2">
              <div className="space-y-3">
                {accountAssociations.map((association) => (
                  <Card key={association.id} className="overflow-hidden">
                    <CardContent className="p-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Association(s)</span>
                          <span>{association.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Contract Type</span>
                          <span>{association.contractType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Attestation Status</span>
                          <div className="flex items-center">
                            <AttestationStatus status={association.status} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Commission Access</span>
                          <div>
                            {editingId === association.id ? (
                              <RadioGroup 
                                defaultValue={association.commissionAccess ? "yes" : "no"}
                                className="flex gap-4"
                                onValueChange={(value) => onCommissionAccessChange(association.id, value === "yes")}
                              >
                                <div className="flex items-center space-x-1">
                                  <RadioGroupItem value="yes" id={`m-yes-${association.id}`} />
                                  <Label htmlFor={`m-yes-${association.id}`} className="text-xs">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <RadioGroupItem value="no" id={`m-no-${association.id}`} />
                                  <Label htmlFor={`m-no-${association.id}`} className="text-xs">No</Label>
                                </div>
                              </RadioGroup>
                            ) : (
                              association.commissionAccess ? "Yes" : "No"
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Enabled</span>
                          {editingId === association.id ? (
                            <div className="flex items-center space-x-2">
                              <Switch 
                                checked={association.enabled}
                                onCheckedChange={(checked) => onEnabledChange(association.id, checked)}
                              />
                              <Label className="text-xs">{association.enabled ? "Enabled" : "Disabled"}</Label>
                            </div>
                          ) : (
                            <span>{association.enabled ? "Enabled" : "Disabled"}</span>
                          )}
                        </div>
                        <div className="pt-1 flex justify-end">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => toggleEdit(association.id)}
                          >
                            {editingId === association.id ? "Save" : "Manage"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default MobileAssociationAccordion;
