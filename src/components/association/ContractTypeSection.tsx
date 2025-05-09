
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

export const ContractTypeSection: React.FC = () => {
  const { control } = useFormContext();
  
  return (
    <FormField
      control={control}
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
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};
