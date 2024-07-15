import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; //App.js is been imported
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

import "./App.css";






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);