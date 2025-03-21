import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DrinkProvider } from './contexts/DrinkContext.jsx';

// styles
import "./styles/reset.css";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DrinkProvider>
      <BrowserRouter> {/* ✅ Add this wrapper */}
        <App />
      </BrowserRouter>
    </DrinkProvider>
  </React.StrictMode>
);
