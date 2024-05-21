import { createBrowserRouter, Navigate } from "react-router-dom";

import { pages } from "./pages";
import { DEFAULT_PAGE } from "../../model/pages/pages.ts";
import { App } from "../app.tsx";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Navigate to={DEFAULT_PAGE} replace /> },
      ...Object.entries(pages).map(([key, page]) => ({
        path: key,
        element: page.element,
      })),
    ],
  },
]);
