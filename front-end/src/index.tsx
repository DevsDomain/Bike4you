//import React from 'react';
import ReactDOM from 'react-dom/client';
//import GlobalStyles from './styles/global';
//mport { Routes } from './routes';
//import reportWebVitals from './reportWebVitals';
//import { GoogleOAuthProvider } from '@react-oauth/google';
//import { AuthProvider } from './hooks/auth';
import CardBykes from './components/card/card';

const clientToken = process.env.REACT_APP_CLIENT_ID || 'AnotherAPITOKEN'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement 
);

root.render(
  <CardBykes/>
);


//reportWebVitals();
