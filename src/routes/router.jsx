import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Shared/Layout";
import UerProfile from "../pages/UerProfile/UerProfile";
import CreateEvents from "../pages/CreateEvent/CreateEvents";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <UerProfile /> },
      { path: "/create-event", element: <CreateEvents /> },
    ],
  },
]);

export default Router;
