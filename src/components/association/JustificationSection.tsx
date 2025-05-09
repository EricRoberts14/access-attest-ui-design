
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

export const JustificationSection: React.FC = () => {
  const { control } = useFormContext();
  
  return (
    <FormField
      control={control}
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
  );
};
