import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./language/i18n.ts";
import { Router } from "./router/router.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
