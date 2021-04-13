import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
