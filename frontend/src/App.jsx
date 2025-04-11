import React from "react";
import { RouterProvider } from "react-router";

import routes from "./routes";

function App() {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
