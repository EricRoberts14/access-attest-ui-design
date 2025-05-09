
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { UserCheck } from 'lucide-react';
import { useForm, FormProvider } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { EntityInfoSection } from './EntityInfoSection';
import { AssociationSelectionSection } from './AssociationSelectionSection';
import { ContractTypeSection } from './ContractTypeSection';
import { CommissionAccessSection } from './CommissionAccessSection';
import { JustificationSection } from './JustificationSection';
import { AttestationSection } from './AttestationSection';

interface CreateAssociationFormProps {
  onClose?: () => void;
  existingEntity?: {
    entityName: string;
    entityEmail: string;
    entityType: string;
  };
  prefillEmail?: string;
}

type FormData = {
  entityEmail: string;
  association: string[];
  contractType: string;
  commissionAccess: string;
  justification: string;
  attestationConfirmation: boolean;
};

const CreateAssociationForm = ({ onClose, existingEntity, prefillEmail }: CreateAssociationFormProps) => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    defaultValues: {
      entityEmail: existingEntity?.entityEmail || prefillEmail || "",
      association: [],
      contractType: "RIA",
      commissionAccess: "no",
      justification: "",
      attestationConfirmation: false,
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data submitted:", data);
    toast({
      title: "Association Created",
      description: `A new association has been created with ${data.entityEmail}.`,
    });
    if (onClose) onClose();
  };

  return (
    <Form {...form}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardContent className="space-y-3 p-2">
            {existingEntity && (
              <div className="flex items-center p-3 bg-muted/50 rounded-md mb-2">
                <UserCheck className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <p className="font-medium">{existingEntity.entityName}</p>
                  <p className="text-sm text-muted-foreground">{existingEntity.entityEmail}</p>
                </div>
              </div>
            )}

            {!existingEntity && (
              <EntityInfoSection prefillEmail={prefillEmail} />
            )}
            
            <AssociationSelectionSection />
            <ContractTypeSection />
            <CommissionAccessSection />
            <JustificationSection />
            <AttestationSection />
            
          </CardContent>
          <CardFooter className="flex justify-between px-2 py-2">
            <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit">Create Association</Button>
          </CardFooter>
        </form>
      </FormProvider>
    </Form>
  );
};

export default CreateAssociationForm;
