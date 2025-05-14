
import Alpine from 'alpinejs';

// Custom directive handler to map data-x- prefixed attributes to Alpine.js x- directives
document.addEventListener('DOMContentLoaded', () => {
  const processAlpineAttributes = (element: HTMLElement) => {
    // List of all possible data-x- attributes
    const attrs = [
      'data-x-data',
      'data-x-text',
      'data-x-show',
      'data-x-model',
      'data-x-on-click',
      'data-x-transition-enter',
      'data-x-transition-enter-start',
      'data-x-transition-enter-end',
      'data-x-transition-leave',
      'data-x-transition-leave-start',
      'data-x-transition-leave-end',
      'data-x-on-click-stop',
      'data-x-on-dialog-closed'
    ];

    // For each Alpine-related data attribute, convert to the actual Alpine attribute
    attrs.forEach(attr => {
      const elements = document.querySelectorAll(`[${attr}]`);
      elements.forEach(el => {
        const value = el.getAttribute(attr);
        if (value !== null) {
          // Convert data-x-on-click to x-on:click, etc.
          const alpineAttr = attr
            .replace('data-x-', 'x-')
            .replace('-on-', '-on:');
          
          el.setAttribute(alpineAttr, value);
        }
      });
    });
  };

  // Process Alpine attributes when DOM is ready
  processAlpineAttributes(document.body as HTMLElement);
  
  // Set up a MutationObserver to process Alpine attributes for dynamically added elements
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            processAlpineAttributes(node as HTMLElement);
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Export for TypeScript type safety
export default Alpine;
