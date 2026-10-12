/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails";
import { About } from "./components/ui/About";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);


const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path:"/men",
        element:<Men />,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/product/:id",
        element:<ProductDetails />,
      }
    ],
    errorElement:<Error/>,
  }
]);


// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
