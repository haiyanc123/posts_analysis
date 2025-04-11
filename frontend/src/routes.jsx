import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import BaseLayoutPage from "./pages/BaseLayoutPage/BaseLayoutPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";

const Routes = createBrowserRouter([
  {
    path: "/post",
    element: <BaseLayoutPage />,
    children: [
      {
        path: "/post",
        element: <PostPage />,
      },
    ],
  },
]);

export default Routes;
