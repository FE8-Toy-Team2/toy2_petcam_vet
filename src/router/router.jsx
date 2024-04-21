import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home";

import Signup from "../components/LoginSignup/Signup";
import Login from "../components/LoginSignup/Login";
import ChartList from "../components/ChartList/ChartList";
import Chart from "../pages/Chart";

import Announcement from "../components/Announcement";
import AnnouncementHeader from "../components/Announcement/Header";
import AnnouncementContent from "../components/Announcement/Content";
import AnnouncementWrite from "../components/Announcement/Write";
import { useState } from "react";

const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
  setIsLoggedIn(true);
};
const handleLogout = () => {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      setIsLoggedIn(false);
      alert("로그아웃하셨습니다");
    })
    .catch((error) => {
      alert("에러 발생", error);
    });
};

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
        path: "login",
        element: <Login onLogin={handleLogin} />,
      },
      {
        path: "singup",
        element: <Signup onLogin={handleLogin} isLoggedIn={isLoggedIn} />,
      },
      {
        path: "chartlist",
        element: <ChartList />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "announcement",
        element: <Announcement />,
        children: [
          {
            path: "",
            element: (
              <>
                <AnnouncementHeader />
                <AnnouncementContent />
              </>
            ),
          },
          {
            path: "write",
            element: <AnnouncementWrite />,
          },
          {
            path: ":id",
            element: (
              <>
                <AnnouncementHeader />
                <Post />
              </>
            ),
          },
          {
            path: ":id/edit",
            element: <AnnouncementWrite />,
          },
        ],
      },
    ],
  },
]);

export default router;
