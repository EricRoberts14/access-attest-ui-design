
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export const AttestationSection: React.FC = () => {
  const { control } = useFormContext();
  
  return (
    <>
      <FormField
        control={control}
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
    </>
  );
};
