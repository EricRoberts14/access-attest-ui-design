
import React from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import AttestationStatus from '../AttestationStatus';
import { AttestationData } from './types';

interface DesktopAttestationTableProps {
  attestations: AttestationData[];
}

const DesktopAttestationTable = ({ attestations }: DesktopAttestationTableProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="text-xs font-medium text-left p-3">Account Holder</th>
            <th className="text-xs font-medium text-left p-3">Association(s)</th>
            <th className="text-xs font-medium text-left p-3">Contract Type</th>
            <th className="text-xs font-medium text-left p-3">Expires</th>
            <th className="text-xs font-medium text-left p-3">Attestation Status</th>
            <th className="text-xs font-medium text-left p-3">Commission Access</th>
            <th className="text-xs font-medium text-left p-3">Enabled</th>
            <th className="text-xs font-medium text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {attestations.map((attestation) => (
            <tr key={attestation.id} className="hover:bg-muted/50">
              <td className="p-3 text-sm">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="cursor-help underline decoration-dotted">
                      {attestation.accountHolder}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <div className="text-sm">
                      <p className="font-medium">{attestation.accountEmail}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </td>
              <td className="p-3 text-sm">{attestation.entityName}</td>
              <td className="p-3 text-sm">{attestation.contractType}</td>
              <td className="p-3 text-sm">{attestation.expirationDate}</td>
              <td className="p-3">
                <AttestationStatus status={attestation.status} />
              </td>
              <td className="p-3 text-sm">{attestation.commissionAccess}</td>
              <td className="p-3 text-sm">{attestation.enabled === "true" ? "Yes" : "No"}</td>
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
  );
};

export default DesktopAttestationTable;
