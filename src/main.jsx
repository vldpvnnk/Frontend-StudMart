import React, { createRoot } from "react-dom/client";
import MainPage from "./components/MainPage";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "100%" }} data-ignore="used only for top most containter width">
    <MainPage />
  </div>
);
