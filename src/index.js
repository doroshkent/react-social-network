import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";
import GlobalFonts from "./style/common/fonts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter basename="/react-social-network">
      <Provider store={store}>
        <GlobalFonts />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
