import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/user.context';
import { CartProvider } from './context/cart.context';

import {Elements} from '@stripe/react-stripe-js';
import { stripePromise } from './components/utils/stripe/stripe.utils';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        
          <CartProvider>
            <Elements stripe={stripePromise}>
            <App />
            </Elements>
          </CartProvider>
        
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
