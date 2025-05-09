
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

export const AssociationSelectionSection: React.FC = () => {
  const { control } = useFormContext();
  
  return (
    <FormField
      control={control}
      name="association"
      render={() => (
        <FormItem>
          <div className="mb-2">
            <FormLabel>Select Association(s)</FormLabel>
          </div>
          <div className="space-y-2">
            <FormField
              control={control}
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
  );
};
