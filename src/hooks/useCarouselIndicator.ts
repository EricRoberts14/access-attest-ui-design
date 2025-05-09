
import { useState, useCallback, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

export function useCarouselIndicator() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  return {
    api,
    setApi,
    activeIndex,
    count
  };
}
