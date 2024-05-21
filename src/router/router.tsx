import { createBrowserRouter } from "react-router-dom";

import { pages } from "./pages";
import App from "../app.tsx";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: Object.entries(pages).map(([key, page]) => ({
      path: key,
      element: page.element,
    })),
  },
]);
