import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./Pages/LogInPage.jsx";
import ContentPage from "./Pages/ContentPage.jsx";
import StartPage from "./Pages/StartPage.jsx";
import App from "./App.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/start",
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
  {
    path: "signup",
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
