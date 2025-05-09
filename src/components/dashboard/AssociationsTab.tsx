
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AttestationStatus from './AttestationStatus';

const AssociationsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Associations</CardTitle>
        <CardDescription>Organizations and individuals with active access permissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-xs font-medium text-left p-3">Entity Name</th>
                  <th className="text-xs font-medium text-left p-3">Type</th>
                  <th className="text-xs font-medium text-left p-3">Access Level</th>
                  <th className="text-xs font-medium text-left p-3">Last Attested</th>
                  <th className="text-xs font-medium text-left p-3">Status</th>
                  <th className="text-xs font-medium text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 text-sm">Acme Corporation</td>
                  <td className="p-3 text-sm">Organization</td>
                  <td className="p-3 text-sm">Full Access</td>
                  <td className="p-3 text-sm">March 15, 2025</td>
                  <td className="p-3">
                    <AttestationStatus status="valid" />
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm">Manage</Button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">James Smith</td>
                  <td className="p-3 text-sm">Individual</td>
                  <td className="p-3 text-sm">Read Only</td>
                  <td className="p-3 text-sm">February 28, 2025</td>
                  <td className="p-3">
                    <AttestationStatus status="valid" />
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm">Manage</Button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">Global Tech Partners</td>
                  <td className="p-3 text-sm">Organization</td>
                  <td className="p-3 text-sm">Full Access</td>
                  <td className="p-3 text-sm">November 30, 2024</td>
                  <td className="p-3">
                    <AttestationStatus status="pending" />
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm">Manage</Button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">Sarah Johnson</td>
                  <td className="p-3 text-sm">Individual</td>
                  <td className="p-3 text-sm">Limited Access</td>
                  <td className="p-3 text-sm">November 25, 2024</td>
                  <td className="p-3">
                    <AttestationStatus status="expired" />
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm">Manage</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <div className="text-sm">Page 1 of 3</div>
        <Button>Next</Button>
      </CardFooter>
    </Card>
  );
};

export default AssociationsTab;
