
import React, {StrictMode} from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App';  
import './index.css';

const root = createRoot(document.getElementById('root')); //Store createRoot in a variable
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);