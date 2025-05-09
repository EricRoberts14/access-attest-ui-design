
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

export const ContractTypeSection: React.FC = () => {
  const { control, watch, setValue } = useFormContext();
  const contractTypes = watch('contractType') || [];

  const contractTypeOptions = [
    { id: 'ria', label: 'RIA' },
    { id: 'agent', label: 'Agent' }
  ];

  const handleCheckboxChange = (checked: boolean, value: string) => {
    const currentValues = [...contractTypes];
    
    if (checked && !currentValues.includes(value)) {
      setValue('contractType', [...currentValues, value]);
    } else if (!checked && currentValues.includes(value)) {
      setValue('contractType', currentValues.filter((type) => type !== value));
    }
  };

  return (
    <div className="space-y-3">
      <FormLabel>Contract Type</FormLabel>
      <div className="space-y-2">
        {contractTypeOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <FormField
              control={control}
              name={`contractType`}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={contractTypes.includes(option.id)}
                      onCheckedChange={(checked) => {
                        handleCheckboxChange(!!checked, option.id);
                      }}
                    />
                  </FormControl>
                  <div className="font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                  </div>
                </FormItem>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
