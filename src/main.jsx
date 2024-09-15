import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import { StrictMode } from 'react';



import "./css/style.css";

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <Router />
       </StrictMode>
    
)
