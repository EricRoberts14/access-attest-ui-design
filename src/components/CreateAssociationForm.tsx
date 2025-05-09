
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm, FormProvider } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
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
}

type FormData = {
  entityType: string;
  entityName: string;
  entityEmail: string;
  accessLevel: string;
  expiration: Date;
  permissions: {
    view: boolean;
    modify: boolean;
    delete: boolean;
    admin: boolean;
  };
  justification: string;
  attestationConfirmation: boolean;
};

const CreateAssociationForm = ({ onClose }: CreateAssociationFormProps) => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    defaultValues: {
      entityType: "organization",
      entityName: "",
      entityEmail: "",
      accessLevel: "readonly",
      expiration: new Date(),
      permissions: {
        view: false,
        modify: false,
        delete: false,
        admin: false,
      },
      justification: "",
      attestationConfirmation: false,
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data submitted:", data);
    toast({
      title: "Association Created",
      description: `${data.entityName} has been successfully associated with your account.`,
    });
    if (onClose) onClose();
  };

  return (
    <Form {...form}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="entityType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entity Type</FormLabel>
                  <Select 
                    value={field.value} 
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger id="entity-type">
                        <SelectValue placeholder="Select entity type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="organization">Organization</SelectItem>
                      <SelectItem value="individual">Individual</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="entityName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entity Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter organization name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="entityEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accessLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Access Level</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger id="access-level">
                        <SelectValue placeholder="Select access level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="readonly">Read Only</SelectItem>
                      <SelectItem value="limited">Limited Access</SelectItem>
                      <SelectItem value="full">Full Access</SelectItem>
                      <SelectItem value="admin">Administrative Access</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expiration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Access Expiration</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <div className="text-xs text-muted-foreground mt-1">
                    Next attestation will be due on September 30, 2025
                  </div>
                </FormItem>
              )}
            />

            <div>
              <Label>Permissions</Label>
              <div className="space-y-2 mt-2">
                <FormField
                  control={form.control}
                  name="permissions.view"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="view" 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="view" className="text-sm font-normal">View data</Label>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permissions.modify"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="modify" 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="modify" className="text-sm font-normal">Modify data</Label>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permissions.delete"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="delete" 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="delete" className="text-sm font-normal">Delete data</Label>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permissions.admin"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="admin" 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="admin" className="text-sm font-normal">Administrative functions</Label>
                    </div>
                  )}
                />
              </div>
            </div>
            
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
                      className="resize-none" 
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
                <FormItem className="mt-4">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox 
                        id="attestation-confirmation" 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label htmlFor="attestation-confirmation" className="text-sm font-normal">
                      I understand that this association will require attestation every 6 months (March and September)
                    </Label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit">Create Association</Button>
          </CardFooter>
        </form>
      </FormProvider>
    </Form>
  );
};

export default CreateAssociationForm;
