import React from "react";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import Recommanded from "./Recommanded/Recommanded";
import Sidebar from "./Sidebar/Sidebar";
const App = () => {
  return (
    <>
    <Sidebar />
      <Navigation />
      <Recommanded />
      <Product />
    </>
  );
};

export default App;
