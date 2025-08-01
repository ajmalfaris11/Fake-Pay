import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 👇 Register the Service Worker
import { registerSW } from 'virtual:pwa-register';

registerSW();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
