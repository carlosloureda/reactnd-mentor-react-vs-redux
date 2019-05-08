import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ReduxContext from "./context";

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <ReduxContext.Provider value={store}>
        <App />
      </ReduxContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
