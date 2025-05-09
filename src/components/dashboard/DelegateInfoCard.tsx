
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useCarouselIndicator } from '@/hooks/useCarouselIndicator';

// Sample data for demonstration
const delegateEntities = [
  {
    id: 1,
    name: "Raymond James LLC"
  },
  {
    id: 2,
    name: "Morgan Financial Partners"
  },
  {
    id: 3,
    name: "Fidelity Investments"
  }
];

const DelegateInfoCard = () => {
  const { api, setApi, activeIndex, count } = useCarouselIndicator();

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-massmutual-blue-dark">Delegation Authority</CardTitle>
        <CardDescription>You are authorized as a delegate, therefore, you can create and manage associations for this entity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <UsersIcon className="h-5 w-5 text-massmutual-orange" />
          <span className="text-sm">You can assign associations on behalf of</span>
        </div>
        
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {delegateEntities.map((entity) => (
              <CarouselItem key={entity.id}>
                <div className="border border-massmutual-gray-light rounded-md p-3 bg-massmutual-gray-light/10">
                  <h4 className="font-medium text-massmutual-blue-dark mb-1">{entity.name}</h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
            <div className="flex items-center gap-2 mx-2">
              {Array.from({ length: count }).map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-massmutual-blue-dark' : 'bg-massmutual-gray-light'
                  }`}
                />
              ))}
            </div>
            <CarouselNext className="relative inset-0 translate-y-0 right-0" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default DelegateInfoCard;
