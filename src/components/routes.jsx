import NavigationBar from "./Navigation";
import Basket from "./Basket";
import App from "../App";
import Shop from "./Shop";

const route = [
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
];

export default route;
