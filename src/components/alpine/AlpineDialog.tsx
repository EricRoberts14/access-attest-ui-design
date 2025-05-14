
import React, { useEffect, useRef } from 'react';

interface AlpineDialogProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const AlpineDialog: React.FC<AlpineDialogProps> = ({ 
  title, 
  children, 
  isOpen = false, 
  onClose, 
  className = '' 
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize Alpine component when mounted
    if (dialogRef.current && window.Alpine) {
      window.Alpine.initTree(dialogRef.current);
    }
  }, []);

  // Handle React state sync with Alpine
  useEffect(() => {
    if (dialogRef.current) {
      // This is a simple approach to sync React state with Alpine
      // In a more complex scenario, we'd use Alpine's $dispatch to communicate both ways
      const alpineComponent = dialogRef.current;
      if (window.Alpine) {
        const alpineData = window.Alpine.$data(alpineComponent);
        if (alpineData) {
          alpineData.open = isOpen;
        }
      }
    }
  }, [isOpen]);

  return (
    <div 
      ref={dialogRef}
      x-data={`{ 
        open: ${isOpen ? 'true' : 'false'},
        close() { 
          this.open = false;
          ${onClose ? '$nextTick(() => this.$dispatch("dialog-closed"))' : ''}
        }
      }`}
      x-on:dialog-closed={onClose ? '$event.preventDefault(); $nextTick(() => {})' : ''}
      className={className}
    >
      <div 
        className="fixed inset-0 z-50 flex items-start justify-center sm:items-center"
        x-show="open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        style={{ display: 'none' }}
      >
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          x-on:click="close()"
        ></div>
        
        <div 
          className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[85vh] overflow-auto z-50 p-4 sm:p-6 relative"
          x-show="open"
          x-on:click.stop
          x-transition:enter="transition ease-out duration-300"
          x-transition:enter-start="opacity-0 scale-95"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-200"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-95"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            <button 
              className="rounded-full p-1 hover:bg-gray-100"
              x-on:click="close()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="py-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpineDialog;
