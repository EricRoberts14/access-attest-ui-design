
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AttestationStatus from '../AttestationStatus';
import { AttestationData } from './types';

interface MobileAttestationCardProps {
  attestation: AttestationData;
}

const MobileAttestationCard = ({ attestation }: MobileAttestationCardProps) => {
  return (
    <Card key={attestation.id} className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-base flex justify-between items-center">
          <span>{attestation.accountHolder}</span>
          <AttestationStatus status={attestation.status} />
        </CardTitle>
        <CardDescription className="text-xs mt-1">{attestation.accountEmail}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <dl className="grid grid-cols-2 gap-1 text-sm">
          <dt className="text-xs font-medium text-muted-foreground">Association</dt>
          <dd>{attestation.entityName}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Type</dt>
          <dd>{attestation.contractType}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Expires</dt>
          <dd>{attestation.expirationDate}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Commission</dt>
          <dd>{attestation.commissionAccess}</dd>
          
          <dt className="text-xs font-medium text-muted-foreground">Enabled</dt>
          <dd>{attestation.enabled}</dd>
        </dl>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex gap-2 justify-end">
        <Button size="sm">Attest</Button>
        <Button size="sm" variant="destructive">Reject</Button>
      </CardFooter>
    </Card>
  );
};

export default MobileAttestationCard;
