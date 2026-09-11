import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Button from "./pages/Button";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
       { path: "AboutUs", element: <About /> },
       { path: "buttons", element: <Button /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
