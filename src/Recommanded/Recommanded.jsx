import React from "react";
import "./Recommanded.css";

const Recommanded = () => {
  return (
    <>
      <h2 className="recommanded-title">Recommandations</h2>
      <div className="recommanded-flex">
        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Vans</button>
      </div>
    </>
  );
};

export default Recommanded;
