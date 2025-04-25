import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root element in HTML

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
