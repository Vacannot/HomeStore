import React, { CSSProperties } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import QuantityCounter from "./QuantityCounter";

function Layout() {
  return (
    <div style={rootStyle}>
      <Switch>
        <Header />
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
