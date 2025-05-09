
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AttestationData } from './types';
import AttestationStatus from '../AttestationStatus';
import { Badge } from '@/components/ui/badge';
import { User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MobileAttestationAccordionProps {
  attestations: AttestationData[];
}

const MobileAttestationAccordion = ({ attestations }: MobileAttestationAccordionProps) => {
  // Group attestations by account holder
  const groupedAttestations = attestations.reduce((groups: Record<string, AttestationData[]>, attestation) => {
    const key = attestation.accountHolder;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(attestation);
    return groups;
  }, {});
  
  const handleAttestAll = (accountHolder: string) => {
    toast({
      title: "Attesting All",
      description: `Processing attestations for ${accountHolder}`,
    });
  };

  const handleRejectAll = (accountHolder: string) => {
    toast({
      title: "Rejecting All",
      description: `Rejecting attestations for ${accountHolder}`,
    });
  };
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(groupedAttestations).map(([accountHolder, accountAttestations]) => {
        // Use first attestation for account holder details
        const accountDetails = accountAttestations[0];
        
        return (
          <AccordionItem key={accountHolder} value={accountHolder} className="border rounded-md mb-2">
            <AccordionTrigger className="hover:bg-muted/50 px-3 py-2.5 rounded-md">
              <div className="flex w-full items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1 sm:mb-0">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{accountDetails.accountHolder}</span>
                    </div>
                    <AttestationStatus status={accountDetails.status} />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
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
            <AccordionContent className="pt-2 pb-2 px-3">
              <div className="flex items-center justify-end mb-3">
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleAttestAll(accountHolder)}>Attest All</Button>
                  <Button size="sm" variant="destructive" onClick={() => handleRejectAll(accountHolder)}>Reject All</Button>
                </div>
              </div>
              <div className="space-y-3">
                {accountAttestations.map((attestation) => (
                  <Card key={attestation.id} className="overflow-hidden">
                    <CardContent className="p-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Association(s)</span>
                          <span>{attestation.entityName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Contract Type</span>
                          <span>{attestation.contractType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Expires</span>
                          <span>{attestation.expirationDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Attestation Status</span>
                          <div className="flex items-center">
                            <AttestationStatus status={attestation.status} />
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Commission Access</span>
                          <span>{attestation.commissionAccess}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Enabled</span>
                          <span>Yes</span>
                        </div>
                        <div className="pt-1 flex justify-end gap-2">
                          <Button size="sm">Attest</Button>
                          <Button size="sm" variant="destructive">Reject</Button>
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

export default MobileAttestationAccordion;
