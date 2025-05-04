import React from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handelChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handelChange={handelChange} />
        <Colors handelChange={handelChange} />
        <Price handelChange={handelChange} />
      </section>
    </>
  );
};

export default Sidebar;
