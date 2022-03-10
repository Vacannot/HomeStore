import React, { CSSProperties } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function Layout() {
  return (
    <div style={rootStyle}>
      <Switch>
        <div>hej</div>
      </Switch>
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export default Layout;
