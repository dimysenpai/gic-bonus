import React from "react";
import { Outlet } from "react-router";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";

const Layout = () => {
  return (
    <>
      <TopBar />
      {/* <BreadCrumb/> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
