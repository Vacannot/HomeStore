import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Layout from './layout/layout';
import { OrderContextProvider } from './context/OrderContext';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <CartProvider>
          <OrderContextProvider>
            <Layout />
          </OrderContextProvider>
        </CartProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
