import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ConfirmButtonFunction from "./chapter08/ConfirmButtonFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ConfirmButtonFunction />
  // </React.StrictMode>
);

reportWebVitals();
