
import React from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AttestationData } from './types';
import AttestationStatus from '../AttestationStatus';
import { Badge } from '@/components/ui/badge';
import { User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface AttestationAccordionProps {
  attestations: AttestationData[];
}

const AttestationAccordion = ({ attestations }: AttestationAccordionProps) => {
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
                <AttestationStatus status={accountDetails.status} />
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="flex items-center justify-end mb-3">
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleAttestAll(accountHolder)}>Attest All</Button>
                  <Button size="sm" variant="destructive" onClick={() => handleRejectAll(accountHolder)}>Reject All</Button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden mt-2">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-xs font-medium text-left p-3">Association</th>
                      <th className="text-xs font-medium text-left p-3">Contract Type</th>
                      <th className="text-xs font-medium text-left p-3">Expires</th>
                      <th className="text-xs font-medium text-left p-3">Attestation Status</th>
                      <th className="text-xs font-medium text-left p-3">Commission Access</th>
                      <th className="text-xs font-medium text-left p-3">Enabled</th>
                      <th className="text-xs font-medium text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {accountAttestations.map((attestation) => (
                      <tr key={attestation.id} className="hover:bg-muted/50">
                        <td className="p-3 text-sm">{attestation.entityName}</td>
                        <td className="p-3 text-sm">{attestation.contractType}</td>
                        <td className="p-3 text-sm">{attestation.expirationDate}</td>
                        <td className="p-3">
                          <AttestationStatus status={attestation.status} />
                        </td>
                        <td className="p-3 text-sm">{attestation.commissionAccess}</td>
                        <td className="p-3 text-sm">Yes</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button size="sm">Attest</Button>
                            <Button size="sm" variant="destructive">Reject</Button>
                          </div>
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

export default AttestationAccordion;
