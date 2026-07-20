import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "../layout/MainLayout";
import Auth from "../layout/Auth";

import ProtectedDashboard from "./ProtectedDashboard";
import AuthProtected from "./AuthProtected";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProtected />,
    children: [
      {
        element: <Auth />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },

  {
    path: "/dashboard",
    element: <ProtectedDashboard />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;