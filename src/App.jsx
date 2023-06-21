import React from "react";
import Router from "./Router";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <TopBar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
