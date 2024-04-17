import Clock from "./Clock";
import Footer from "./Footer";
import Nav from "./Nav";
import { Route, Routes } from 'react-router-dom'
import Login from "../LoginSignup/Login";
import Signup from "../LoginSignup/Signup";
import Content from "../Announcement/Content"
import ChartList from "../ChartList/ChartList"

function Layout() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />     
        <Route path="/announce" element={<Content />} />     
        <Route path="/chartlist" element={<ChartList />} />     
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
