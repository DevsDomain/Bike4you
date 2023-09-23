import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { Routes } from './routes';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="951689311792-5hck2goql9kpg3vu5nhbmppm4fml81uh.apps.googleusercontent.com" >
    <React.StrictMode>
      <GlobalStyles></GlobalStyles>
      <Routes></Routes>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
