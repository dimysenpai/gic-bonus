import React from "react";
import { Outlet } from "react-router";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const Layout = () => {
  return (
    <>
      <TopBar />
      {/* <Breadcrumb /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
