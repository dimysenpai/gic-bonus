import React from "react";
import Router from "./Router";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div>
      <TopBar />
      <Router />
    </div>
  );
};

export default App;
