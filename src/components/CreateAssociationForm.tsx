
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter } from "@/components/ui/card";
import { UserCheck } from 'lucide-react';
import { useForm, FormProvider } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
              <FormField
                control={form.control}
                name="entityEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Enter email address" 
                        {...field} 
                        disabled={!!prefillEmail}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <FormField
              control={form.control}
              name="association"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>Association</FormLabel>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="association"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes("Raymond James LLC")}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, "Raymond James LLC"])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== "Raymond James LLC"
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Raymond James LLC
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contractType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contract Type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger id="contract-type">
                        <SelectValue placeholder="Select contract type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="RIA">RIA</SelectItem>
                      <SelectItem value="Agent">Agent</SelectItem>
                      <SelectItem value="Broker">Broker</SelectItem>
                      <SelectItem value="Partner">Partner</SelectItem>
                      <SelectItem value="Consultant">Consultant</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="commissionAccess"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commission Access</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="commission-yes" />
                        <Label htmlFor="commission-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="commission-no" />
                        <Label htmlFor="commission-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="justification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Justification</FormLabel>
                  <FormControl>
                    <Textarea 
                      id="justification" 
                      placeholder="Explain why this association is required..." 
                      className="resize-none h-20" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="attestationConfirmation"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox 
                        id="attestation-confirmation" 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label htmlFor="attestation-confirmation" className="text-sm font-normal">
                      I understand that this association will require attestation every 6 months
                    </Label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="text-xs text-muted-foreground mt-2">
              Next attestation will be due on November 30, 2025
            </div>
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
