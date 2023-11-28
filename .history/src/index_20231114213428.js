import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <p>COMP-3170-0 - Frontend Web Development 2 &copy; Corey Rutt&trade; </p>
  </StrictMode>
);
