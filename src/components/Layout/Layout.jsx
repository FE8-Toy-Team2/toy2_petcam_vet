import Clock from "./Clock";
import Footer from "./Footer";
import Nav from "./Nav";
import { Route, Routes } from 'react-router-dom'
import Login from "../LoginSignup/Login";
import Signup from "../LoginSignup/Signup";

function Layout() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />     
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
