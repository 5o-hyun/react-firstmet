import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ConfirmButtonFunction from "./chapter08/ConfirmButtonFunction";
import RendingPage from "./chapter09/RendingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RendingPage />
  // </React.StrictMode>
);

reportWebVitals();
