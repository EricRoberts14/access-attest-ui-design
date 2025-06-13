
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
import AccountClaimStatus from './AccountClaimStatus';
import { Badge } from '@/components/ui/badge';
import { User, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedAccountHolder, setSelectedAccountHolder] = useState<string | null>(null);
  const [newAssociation, setNewAssociation] = useState({
    name: "",
    contractTypes: [] as string[],
    commissionAccess: false
  });
  
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

  // Available associations to add
  const availableAssociations = [
    "Raymond James LLC",
    "Fidelity Investments",
    "Charles Schwab",
    "Vanguard Group"
  ];

  // Contract types
  const contractTypes = [
    { id: "ria", label: "RIA" },
    { id: "agent", label: "Agent" }
  ];

  // Handle adding a new association
  const handleAddAssociation = () => {
    if (!selectedAccountHolder || !newAssociation.name) {
      toast({
        title: "Required Fields Missing",
        description: "Please select an account holder and association",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically call an API to add the association
    toast({
      title: "Association Added",
      description: `Added ${newAssociation.name} to ${selectedAccountHolder}`,
    });

    // Reset form state
    setNewAssociation({
      name: "",
      contractTypes: [],
      commissionAccess: false
    });
    setSelectedAccountHolder(null);
    setIsAddDialogOpen(false);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="flex gap-1">
              <Plus className="h-4 w-4" />
              Add Association
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Association</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="mobileAccountHolder">Account Holder</Label>
                <Select value={selectedAccountHolder || ""} onValueChange={setSelectedAccountHolder}>
                  <SelectTrigger id="mobileAccountHolder">
                    <SelectValue placeholder="Select account holder" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(groupedAssociations).map((accountHolder) => (
                      <SelectItem key={accountHolder} value={accountHolder}>
                        {accountHolder}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobileAssociation">Association</Label>
                <Select 
                  value={newAssociation.name} 
                  onValueChange={(value) => setNewAssociation({...newAssociation, name: value})}
                >
                  <SelectTrigger id="mobileAssociation">
                    <SelectValue placeholder="Select association" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableAssociations.map((assoc) => (
                      <SelectItem key={assoc} value={assoc}>
                        {assoc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="block mb-1">Contract Type</Label>
                <div className="space-y-2">
                  {contractTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`mobile-contract-${type.id}`}
                        checked={newAssociation.contractTypes.includes(type.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setNewAssociation({
                              ...newAssociation, 
                              contractTypes: [...newAssociation.contractTypes, type.id]
                            });
                          } else {
                            setNewAssociation({
                              ...newAssociation,
                              contractTypes: newAssociation.contractTypes.filter(t => t !== type.id)
                            });
                          }
                        }}
                      />
                      <Label htmlFor={`mobile-contract-${type.id}`}>{type.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="block mb-1">Commission Access</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="mobile-commission-access"
                      checked={newAssociation.commissionAccess}
                      onCheckedChange={(checked) => {
                        setNewAssociation({
                          ...newAssociation,
                          commissionAccess: !!checked
                        });
                      }}
                    />
                    <Label htmlFor="mobile-commission-access">Allow Commission Access</Label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddAssociation}>
                  Add Association
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(groupedAssociations).map(([accountHolder, accountAssociations]) => {
          // Use first association for account holder details
          const accountDetails = accountAssociations[0];
          
          return (
            <AccordionItem key={accountHolder} value={accountHolder} className="border rounded-md mb-2">
              <AccordionTrigger className="hover:bg-muted/50 px-3 py-2.5 rounded-md">
                <div className="flex w-full items-center justify-between pr-2">
                  <div className="flex flex-col sm:flex-row sm:items-center text-left">
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
                  <div className="ml-auto flex-shrink-0">
                    <AccountClaimStatus 
                      accountClaimed={accountDetails.accountClaimed || false}
                      accountEmail={accountDetails.accountEmail}
                      accountHolder={accountDetails.accountHolder}
                    />
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
                            <span className="font-medium">Association</span>
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
                                <Label className="text-xs">{association.enabled ? "Yes" : "No"}</Label>
                              </div>
                            ) : (
                              <span>{association.enabled ? "Yes" : "No"}</span>
                            )}
                          </div>
                          <div className="pt-1 flex justify-end">
                            <Button 
                              variant={editingId === association.id ? "default" : "ghost"}
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
    </div>
  );
};

export default MobileAssociationAccordion;
