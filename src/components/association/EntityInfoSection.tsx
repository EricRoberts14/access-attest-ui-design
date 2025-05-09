
import React from 'react';
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface EntityInfoSectionProps {
  prefillEmail?: string;
}

export const EntityInfoSection: React.FC<EntityInfoSectionProps> = ({ prefillEmail }) => {
  const { control } = useFormContext();
  
  return (
    <FormField
      control={control}
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
  );
};
