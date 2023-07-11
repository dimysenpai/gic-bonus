import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Store from "./pages/Store";
import SignIn from "./pages/SignIn";
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import Training from "./pages/Training";
import DetailsProduct from "./pages/DetailsProduct";
import DetailsService from "./pages/DetailsService";
import DetailsTraining from "./pages/DetailsTraining";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/service" element={<Service />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />

        <Route path="/detailsProduct" element={<DetailsProduct />} />
        <Route path="/detailsService" element={<DetailsService />} />
        <Route path="/detailsTraining" element={<DetailsTraining />} />
      </Route>
    </Routes>
  );
};

export default Router;
