import React from "react";
import "./Recommanded.css";
import Button from "../components/Button";

const Recommanded = ({ handelClick }) => {
  return (
    <>
      <h2 className="recommanded-title">Recommandations</h2>
      <div className="recommanded-flex">
        <button className="btns" onClick={handelClick} value={""}>
          All Products
        </button>
        <Button onClickHandle={handelClick} value={"Nike"} title={"Nike"} />
        <Button onClickHandle={handelClick} value={"Adidas"} title={"Adidas"} />
        <Button onClickHandle={handelClick} value={"Puma"} title={"Puma"} />
        <Button onClickHandle={handelClick} value={"Vans"} title={"Vans"} />
      </div>
    </>
  );
};

export default Recommanded;
