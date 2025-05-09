
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import AttestationStatus from '../AttestationStatus';
import { Association } from './types';

interface MobileAssociationCardProps {
  association: Association;
  onCommissionAccessChange: (id: number, value: boolean) => void;
  onEnabledChange: (id: number, value: boolean) => void;
}

const MobileAssociationCard = ({ 
  association,
  onCommissionAccessChange,
  onEnabledChange
}: MobileAssociationCardProps) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = React.useState(false);
  
  const handleEdit = () => {
    if (isEditing) {
      toast({
        title: "Changes saved",
        description: "Association settings have been updated",
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <Card key={association.id} className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-base flex justify-between items-center">
          <span>{association.accountHolder}</span>
          <AttestationStatus status={association.status} />
        </CardTitle>
        <CardDescription className="text-xs mt-1">{association.accountEmail}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <dl className="grid grid-cols-2 gap-1 text-sm">
          <dt className="text-xs font-medium text-muted-foreground">Association</dt>
          <dd>{association.name}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Type</dt>
          <dd>{association.contractType}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Last Attested</dt>
          <dd>{association.lastAttested}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Commission Access</dt>
          <dd>
            {isEditing ? (
              <div className="flex gap-2 items-center">
                <Switch 
                  checked={association.commissionAccess}
                  onCheckedChange={(checked) => onCommissionAccessChange(association.id, checked)}
                />
                <Label className="text-xs">{association.commissionAccess ? "Yes" : "No"}</Label>
              </div>
            ) : (
              association.commissionAccess ? "Yes" : "No"
            )}
          </dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Enabled</dt>
          <dd>
            {isEditing ? (
              <div className="flex gap-2 items-center">
                <Switch 
                  checked={association.enabled}
                  onCheckedChange={(checked) => onEnabledChange(association.id, checked)}
                />
                <Label className="text-xs">{association.enabled ? "Enabled" : "Disabled"}</Label>
              </div>
            ) : (
              association.enabled ? "Enabled" : "Disabled"
            )}
          </dd>
        </dl>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex gap-2 justify-end">
        <Button size="sm" onClick={handleEdit}>
          {isEditing ? "Save" : "Manage"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MobileAssociationCard;
