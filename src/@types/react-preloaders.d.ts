declare module 'react-preloaders' {
    import React from 'react';
  
    export const Sugar: React.FC<{ color?: string; customStyle?: React.CSSProperties }>;
    export const Ball: React.FC<{ color?: string; customStyle?: React.CSSProperties }>;
    // Add other exports as needed
  
    export default { Sugar, Ball }; // If you want to export all preloaders as default
  }
  