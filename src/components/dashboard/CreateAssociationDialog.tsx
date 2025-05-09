
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EmailSearchForm from '../EmailSearchForm';
import CreateAssociationForm from '../association/CreateAssociationForm';

interface CreateAssociationDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateAssociationDialog = ({ open, onClose }: CreateAssociationDialogProps) => {
  const [emailSearchCompleted, setEmailSearchCompleted] = useState(false);
  const [searchedEmail, setSearchedEmail] = useState('');
  const [existingAccount, setExistingAccount] = useState<{name: string, email: string, type: string} | null>(null);

  const handleEmailSearch = (email: string, exists: boolean, accountData?: {name: string, email: string, type: string}) => {
    setSearchedEmail(email);
    setEmailSearchCompleted(true);
    setExistingAccount(accountData || null);
  };
  
  const handleCloseDialog = () => {
    setEmailSearchCompleted(false);
    setSearchedEmail('');
    setExistingAccount(null);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Create New Association
          </DialogTitle>
          <DialogDescription>
            {!emailSearchCompleted 
              ? "Enter an email address to check if an account already exists" 
              : existingAccount 
                ? `Create a new association with the existing account for ${existingAccount.email}`
                : `Create a new association for ${searchedEmail}`
            }
          </DialogDescription>
        </DialogHeader>
        
        {!emailSearchCompleted ? (
          <EmailSearchForm onSearch={handleEmailSearch} onClose={handleCloseDialog} />
        ) : existingAccount ? (
          <CreateAssociationForm 
            onClose={handleCloseDialog} 
            existingEntity={{
              entityName: existingAccount.name,
              entityEmail: existingAccount.email,
              entityType: existingAccount.type
            }}
          />
        ) : (
          <CreateAssociationForm 
            onClose={handleCloseDialog} 
            prefillEmail={searchedEmail}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateAssociationDialog;
