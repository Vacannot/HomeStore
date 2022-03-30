import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Layout from "./layout/layout";
import ThemeProvider from "./context/themeContext";
import { OrderContextProvider } from "./context/OrderContext";
// import { useTheme } from '@mui/material';

function App() {
  // const { theme } = useTheme();
  // const { cart } = useCart();

  return (
    <StrictMode>
      <BrowserRouter>
        <CartProvider>
          {/* <ThemeProvider> */}
          <OrderContextProvider>
            <Layout />
          </OrderContextProvider>
          {/* </ThemeProvider> */}
        </CartProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
