// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind

// 👉 Add this line to register the service worker
import { registerSW } from "virtual:pwa-register";

// ✅ Register the service worker for PWA
registerSW();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
