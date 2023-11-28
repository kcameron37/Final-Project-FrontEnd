import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import './styles.css'; // Import your CSS stylesheet

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <p className="footer">- Frontend Web Development () - Final Project&copy; Corey Rutt&trade; Giovana Birck&trade; Kaitlyn Cameron&trade; Sara Shiojima&trade; </p>
  </StrictMode>
);
