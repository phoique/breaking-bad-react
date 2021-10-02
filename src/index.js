import React from "react";
import ReactDOM from "react-dom";
import Store from "./redux/Store";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
