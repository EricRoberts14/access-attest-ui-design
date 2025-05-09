
import React from 'react';
import { Check, Clock, X } from 'lucide-react';

type AttestationStatusProps = {
  status: 'valid' | 'pending' | 'expired';
};

const AttestationStatus = ({ status }: AttestationStatusProps) => {
  const statusConfig = {
    valid: {
      color: "attestation-valid",
      text: "Valid",
      icon: Check
    },
    pending: {
      color: "attestation-pending",
      text: "Pending",
      icon: Clock
    },
    expired: {
      color: "attestation-expired",
      text: "Expired",
      icon: X
    }
  };
  
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full bg-${config.color}`}></span>
      <span className="text-sm font-medium">{config.text}</span>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default AttestationStatus;
