import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import BaseLayoutPage from "./pages/BaseLayoutPage/BaseLayoutPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayoutPage />,
    children: [
      {
        path: "/post",
        element: <PostPage />,
      },
      {
        path: "/project",
        element: <h1>Temp Project Page</h1>,
      },
    ],
  },
]);

export default Routes;
