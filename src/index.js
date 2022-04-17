import React from "react";
import { createRoot } from "react-dom/client";
import Store from "./redux/Store";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>
);
