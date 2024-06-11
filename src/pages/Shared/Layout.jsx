import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-[#fafafa] flex flex-col items-center min-h-screen">
      <div className="flex flex-col w-full md:w-[960px]">
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
