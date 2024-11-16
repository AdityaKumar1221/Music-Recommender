import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { OutputProvider } from "./context/ModelOutputContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OutputProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OutputProvider>
  </React.StrictMode>
);
