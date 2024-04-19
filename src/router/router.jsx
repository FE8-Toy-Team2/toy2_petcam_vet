import { createBrowserRouter } from "react-router-dom";
import ChartList from "../components/ChartList/ChartList";
import Home from "../components/Home";
import Layout from "../components/Layout/Layout";
import Announcement from "../components/Announcement/Announcement";

import ClinicLog from "../components/Chart/ClinicLog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "chart/*",
        element: <ChartList />,
      },
      {
        path: "chart/:id",
        element: <ClinicLog />,
      },
      {
        path: "announcement",
        element: <Announcement />,
      },
    ],
  },
]);

export default router;
