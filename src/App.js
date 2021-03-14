import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./views/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Repositories from "./views/Repositories";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/repositories">
          <Repositories />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
