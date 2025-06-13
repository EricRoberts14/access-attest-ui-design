
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        {accountClaimed ? (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Claimed
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            <XCircle className="h-3 w-3 mr-1" />
            Unclaimed
          </Badge>
        )}
      </div>
      
      {!accountClaimed && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleResendClaimEmail}
          className="h-6 px-2 text-xs ml-2"
        >
          <Mail className="h-3 w-3 mr-1" />
          Resend Claim Email
        </Button>
      )}
    </div>
  );
};

export default AccountClaimStatus;
