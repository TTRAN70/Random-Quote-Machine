import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
var head = document.getElementsByTagName('HEAD')[0]; 
var link  = document.createElement('link'); 
link.rel = "stylesheet"; 
link.href = "https://fonts.googleapis.com/css?family=Literata";
head.appendChild(link);
var link2  = document.createElement('link'); 
link2.rel = "stylesheet"; 
link2.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap";
head.appendChild(link2);
var link3 = document.createElement('link'); 
link3.rel = "stylesheet"; 
link3.href = "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"; 
head.appendChild(link3);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
