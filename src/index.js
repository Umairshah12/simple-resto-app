import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./component/context";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>,
  document.getElementById("root")
);
