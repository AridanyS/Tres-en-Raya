import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import  Square  from "./App.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Square />
  </StrictMode>
);