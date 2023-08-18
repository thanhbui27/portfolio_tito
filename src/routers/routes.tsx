import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
