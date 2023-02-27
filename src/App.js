// @ts-nocheck
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router";

const App = () => {
  return (
    <div>
      {/*===== provide Header context === */}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
