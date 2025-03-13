import React from "react";
import ReactDOM from "react-dom";
import NAV from "./components/navbar/App.jsx";
import LOADER from "./components/Loading/loading.jsx";

const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

ReactDOM.render(
  <React.StrictMode>
    <NAV />
  </React.StrictMode>,
  rootElement
);

ReactDOM.render(
  <React.StrictMode>
    <LOADER />
  </React.StrictMode>,
  footer
);

