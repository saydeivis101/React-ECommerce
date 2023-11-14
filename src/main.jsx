import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/FiltersProvider.jsx";
import { ECommerceApp } from "./ECommerceApp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FiltersProvider>
      <ECommerceApp />
    </FiltersProvider>
  </React.StrictMode>
);
