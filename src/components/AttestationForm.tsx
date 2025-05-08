
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check } from 'lucide-react';

const AttestationForm = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Attestation Required</CardTitle>
        <CardDescription>
          Please review and attest to the following access permissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6">
          <AlertTitle className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Attestation Period: September 1-30, 2025
          </AlertTitle>
          <AlertDescription>
            This attestation must be completed by September 30th, 2025.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Association Details</h3>
            <div className="bg-muted p-4 rounded-md space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium">Entity Name:</div>
                <div className="text-sm">Acme Corporation</div>
                
                <div className="text-sm font-medium">Entity Type:</div>
                <div className="text-sm">Organization</div>
                
                <div className="text-sm font-medium">Access Level:</div>
                <div className="text-sm">Full Access</div>
                
                <div className="text-sm font-medium">Original Grant Date:</div>
                <div className="text-sm">January 15, 2024</div>
                
                <div className="text-sm font-medium">Last Attestation:</div>
                <div className="text-sm">March 28, 2025</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Current Permissions</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-attestation-valid mr-2" />
                <span className="text-sm">View data</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-attestation-valid mr-2" />
                <span className="text-sm">Modify data</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-attestation-valid mr-2" />
                <span className="text-sm">Delete data</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-attestation-valid mr-2" />
                <span className="text-sm">Administrative functions</span>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-2">Attestation Declaration</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="still-required" className="mt-1" />
                <Label htmlFor="still-required" className="text-sm font-normal">
                  I confirm that this access is still required for business purposes
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="appropriate-level" className="mt-1" />
                <Label htmlFor="appropriate-level" className="text-sm font-normal">
                  I verify that the access level and permissions are appropriate and follow the principle of least privilege
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="security-review" className="mt-1" />
                <Label htmlFor="security-review" className="text-sm font-normal">
                  I have reviewed the security implications of this access
                </Label>
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="comments">Additional Comments</Label>
            <Textarea 
              id="comments" 
              placeholder="Add any comments or notes about this attestation..." 
              className="resize-none h-24 mt-1"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Review Later</Button>
        <div className="space-x-2">
          <Button variant="destructive">Revoke Access</Button>
          <Button>Complete Attestation</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AttestationForm;
