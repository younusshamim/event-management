import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Shared/Layout";
import UerProfile from "../pages/UerProfile/UerProfile";
import CreateEvents from "../pages/CreateEvent/CreateEvents";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import EditEvent from "../pages/EditEvent/EditEvent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <UerProfile /> },
      { path: "/create-event", element: <CreateEvents /> },
      { path: "/edit-event/:id", element: <EditEvent /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default Router;
