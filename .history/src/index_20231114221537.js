import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <p className="footer">Frontend Web Development (COMP-3170) - Final Project&copy; Corey Rutt&trade; Giovana Birck&trade; Kaitlyn Cameron&trade; Sara Shiojima&trade; </p>
  </StrictMode>
);
