import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
