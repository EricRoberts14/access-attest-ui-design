
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Mail } from 'lucide-react';

interface AccountClaimStatusProps {
  accountClaimed: boolean;
  accountEmail: string;
  accountHolder: string;
}

const AccountClaimStatus = ({ accountClaimed, accountEmail, accountHolder }: AccountClaimStatusProps) => {
  const { toast } = useToast();

  const handleResendClaimEmail = () => {
    // This would typically call an API to resend the claim email
    toast({
      title: "Claim Email Sent",
      description: `Account claim email has been sent to ${accountEmail}`,
    });
  };

  return (
    <div className="flex items-center gap-2">
      {accountClaimed ? (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Claimed
        </Badge>
      ) : (
        <Badge 
          variant="outline" 
          className="bg-orange-50 text-orange-700 border-orange-200 cursor-pointer hover:bg-orange-100 transition-colors group"
          onClick={handleResendClaimEmail}
        >
          <XCircle className="h-3 w-3 mr-1 group-hover:hidden" />
          <Mail className="h-3 w-3 mr-1 hidden group-hover:block" />
          <span className="group-hover:hidden">Unclaimed</span>
          <span className="hidden group-hover:block">Resend</span>
        </Badge>
      )}
    </div>
  );
};

export default AccountClaimStatus;
