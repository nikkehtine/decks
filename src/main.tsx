import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DecksRouter } from "@/routes";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <DecksRouter />
    </StrictMode>,
  );
} else {
  console.error("Could not create root. App not initialized");
}
