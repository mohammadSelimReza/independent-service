import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Main from "../Pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
