import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./views/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Repositories from "./views/Repositories";
import SliderComponent from "./slider";

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

        <Route exact path="/slider">
          <SliderComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
