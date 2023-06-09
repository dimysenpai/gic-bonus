import React from "react";
import Router from "./Router";
import TopBar from "./components/TopBar";
import BreadCrumb from "./components/BreadCrumb";

const App = () => {
  return (
    <div>
      <TopBar />
      <BreadCrumb />
      <Router />
    </div>
  );
};

export default App;
