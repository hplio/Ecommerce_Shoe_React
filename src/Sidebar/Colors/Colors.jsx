import React from "react";
import "./Colors.css";
import RadioBtn from "../Category/components/RadioBtn";

const Colors = () => {
  return (
    <div>
      <h2 className="slidebar-title price-title">Colors</h2>
      <RadioBtn title={"All"} name={"Test2"} />
      <RadioBtn title={"Black"} name={"Test2"} />
      <RadioBtn title={"White"} name={"Test2"} />
      <RadioBtn title={"Green"} name={"Test2"} />
      <RadioBtn title={"Red"} name={"Test2"} />
      <RadioBtn title={"Blue"} name={"Test2"} />
    </div>
  );
};

export default Colors;
