
import React, { useEffect, useRef } from 'react';

interface AlpineCounterProps {
  initialCount?: number;
  className?: string;
}

const AlpineCounter: React.FC<AlpineCounterProps> = ({ initialCount = 0, className = '' }) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Alpine.js will automatically pick up the x-data attribute when the component is mounted
    if (counterRef.current) {
      // Make sure Alpine component initializes if it was added after Alpine.start()
      if (window.Alpine) {
        window.Alpine.initTree(counterRef.current);
      }
    }
  }, []);

  return (
    <div 
      ref={counterRef}
      className={`p-4 border rounded-md ${className}`}
      x-data={`{ count: ${initialCount} }`}
    >
      <p className="text-center mb-2">
        <span>Current count: </span>
        <span x-text="count" className="font-bold"></span>
      </p>
      <div className="flex justify-center space-x-2">
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          x-on:click="count--"
        >
          Decrease
        </button>
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          x-on:click="count++"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default AlpineCounter;
