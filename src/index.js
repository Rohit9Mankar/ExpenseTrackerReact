import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './Store/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </AuthProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
