import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home'; 
import About from './About'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app with BrowserRouter to enable routing */}
      <Routes> 
        <Route path="/" element={<App />} /> Default route for your main App component
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();