
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export const CommissionAccessSection: React.FC = () => {
  const { control } = useFormContext();
  
  return (
    <FormField
      control={control}
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
  );
};
