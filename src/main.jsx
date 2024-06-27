import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CollectionProvider } from "./Context/CollectionContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CollectionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CollectionProvider>
  </React.StrictMode>
);
