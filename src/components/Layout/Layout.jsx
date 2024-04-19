import Clock from "./Clock";
import Footer from "./Footer";
import Nav from "./Nav";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
