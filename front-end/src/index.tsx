import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './hooks/auth';

const clientToken = process.env.REACT_APP_CLIENT_ID || 'AnotherAPITOKEN'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId={clientToken} >
    <React.StrictMode>
      <GlobalStyles></GlobalStyles>
      <AuthProvider>
      <Routes></Routes>
      </AuthProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
