import React from "react";
import { createBrowserRouter } from "react-router";

import BaseLayoutPage from "./pages/BaseLayoutPage/BaseLayoutPage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayoutPage />,
    children: [
      {
        path: "/",
        element: <PostPage />,
      },
    ],
  },
]);

export default Routes;
