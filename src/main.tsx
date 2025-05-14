
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './lib/alpine.ts' // Import Alpine.js initialization

createRoot(document.getElementById("root")!).render(<App />);
