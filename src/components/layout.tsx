import React, { CSSProperties } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Header from "./header";
import QuantityCounter from "./quantityCounter";

import Banner from "./Banner";


function Layout() {
  return (
    <div style={rootStyle}>
      <Switch>
        <Header />
        <Banner></Banner>
      </Switch>
      <QuantityCounter />
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export default Layout;
