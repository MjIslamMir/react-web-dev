import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';//importing App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const root = ReactDOM.createRoot(container)
//render app to root
root.render(<App />);
reportWebVitals();
