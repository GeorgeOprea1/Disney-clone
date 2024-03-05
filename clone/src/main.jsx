import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./Pages/LogInPage.jsx";
import ContentPage from "./Pages/ContentPage.jsx";
import StartPage from "./Pages/StartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "content",
    element: <ContentPage />,
  },
  {
    path: "login",
    element: <LogInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
