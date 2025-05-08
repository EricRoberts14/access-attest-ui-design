
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const CreateAssociationForm = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Association</CardTitle>
        <CardDescription>
          Create a new access association between your account and an organization or individual
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="entity-type">Entity Type</Label>
              <Select defaultValue="organization">
                <SelectTrigger id="entity-type" className="w-full">
                  <SelectValue placeholder="Select entity type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="organization">Organization</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="entity-name">Entity Name</Label>
              <Input id="entity-name" placeholder="Enter organization name" />
            </div>
            
            <div>
              <Label htmlFor="entity-email">Contact Email</Label>
              <Input id="entity-email" type="email" placeholder="Enter email address" />
            </div>
            
            <div>
              <Label htmlFor="access-level">Access Level</Label>
              <Select defaultValue="readonly">
                <SelectTrigger id="access-level" className="w-full">
                  <SelectValue placeholder="Select access level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="readonly">Read Only</SelectItem>
                  <SelectItem value="limited">Limited Access</SelectItem>
                  <SelectItem value="full">Full Access</SelectItem>
                  <SelectItem value="admin">Administrative Access</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="expiration">Access Expiration</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <div className="text-xs text-muted-foreground mt-1">
                Next attestation will be due on September 30, 2025
              </div>
            </div>
            
            <div>
              <Label htmlFor="permissions">Permissions</Label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="view" />
                  <Label htmlFor="view" className="text-sm font-normal">View data</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="modify" />
                  <Label htmlFor="modify" className="text-sm font-normal">Modify data</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="delete" />
                  <Label htmlFor="delete" className="text-sm font-normal">Delete data</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="admin" />
                  <Label htmlFor="admin" className="text-sm font-normal">Administrative functions</Label>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="justification">Business Justification</Label>
              <Textarea id="justification" placeholder="Explain why this association is required..." className="resize-none" />
            </div>
            
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="attestation-confirmation" />
                <Label htmlFor="attestation-confirmation" className="text-sm font-normal">
                  I understand that this association will require attestation every 6 months (March and September)
                </Label>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create Association</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateAssociationForm;
