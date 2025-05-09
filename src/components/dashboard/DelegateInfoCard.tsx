
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Sample data for demonstration
const delegateEntities = [
  {
    id: 1,
    name: "Raymond James LLC",
    description: "As a delegate, you can create and manage associations for this entity"
  },
  {
    id: 2,
    name: "Morgan Financial Partners",
    description: "You have full delegation rights for this organization"
  },
  {
    id: 3,
    name: "Fidelity Investments",
    description: "Limited delegation authority for this financial institution"
  }
];

const DelegateInfoCard = () => {
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-massmutual-blue-dark">Delegation Authority</CardTitle>
        <CardDescription>You are authorized as a delegate</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <UsersIcon className="h-5 w-5 text-massmutual-orange" />
          <span className="text-sm">You can assign associations on behalf of</span>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {delegateEntities.map((entity) => (
              <CarouselItem key={entity.id}>
                <div className="border border-massmutual-gray-light rounded-md p-3 bg-massmutual-gray-light/10">
                  <h4 className="font-medium text-massmutual-blue-dark mb-1">{entity.name}</h4>
                  <p className="text-sm text-muted-foreground">{entity.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default DelegateInfoCard;
