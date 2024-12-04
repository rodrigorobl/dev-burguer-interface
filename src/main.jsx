import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
