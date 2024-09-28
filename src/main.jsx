import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Shop from "./components/Shop.jsx";
import Basket from "./components/Basket.jsx";
import NavigationBar from "./components/Navigation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,

    children: [
      { index: true, element: <App /> },
      { path: "shop", element: <Shop /> },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
