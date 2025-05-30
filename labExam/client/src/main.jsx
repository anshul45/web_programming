import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Routes1 from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routes1>
      <App />
    </Routes1>
  </StrictMode>
);
