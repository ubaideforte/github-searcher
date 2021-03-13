import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import store from "./configStore";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { QueryClient, QueryClientProvider } from "react-query";

const query = new QueryClient();

render(
  <QueryClientProvider client={query}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
