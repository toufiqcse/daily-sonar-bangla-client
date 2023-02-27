// @ts-nocheck
import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Rooot from "../layout/Root/Rooot";
import Category from "../pages/Category/Category/Category";
import Contact from "../pages/Contact/Contact";
import HomePage from "../pages/Home/HomePage/HomePage";
import News from "../pages/News/News/News";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default routes;
