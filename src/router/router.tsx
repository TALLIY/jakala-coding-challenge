import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { pages } from "./pages";

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
