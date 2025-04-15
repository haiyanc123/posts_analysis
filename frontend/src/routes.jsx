import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import BaseLayoutPage from "./pages/BaseLayoutPage/BaseLayoutPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayoutPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/post" replace />,
      },
      {
        path: "/post",
        element: <PostPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
    ],
  },
]);

export default Routes;
