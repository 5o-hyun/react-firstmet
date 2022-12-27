import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DarkOrLight from "./chapter14/DarkOrLight";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DarkOrLight />
  // </React.StrictMode>
);

reportWebVitals();
