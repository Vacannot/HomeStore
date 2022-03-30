import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import CartProvider, { useCart } from "./context/CartContext";

import Layout from "./layout/layout";

function App() {
  const { cart } = useCart();

  return (
    <StrictMode>
      <BrowserRouter>
        <CartProvider>
          <Layout />
        </CartProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
