import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Shared/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Shared/Auth/Login";
import Register from "../Shared/Auth/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
