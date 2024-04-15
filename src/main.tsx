import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignIn from "./pages/auth/Signin.tsx";
import Register from "./pages/auth/Register.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
