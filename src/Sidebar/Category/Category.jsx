import React from "react";
import "./Category.css";
import RadioBtn from "./components/RadioBtn";

const Category = () => {
  return (
    <div>
      <h2 className="slidebar-title">Category</h2>
      <div>
        <RadioBtn title={"All"} name={"Test"} />
        <RadioBtn title={"Sneakers"} name={"Test"} />
        <RadioBtn title={"Flats"} name={"Test"} />
        <RadioBtn title={"Sandals"} name={"Test"} />
        <RadioBtn title={"Heels"} name={"Test"} />
      </div>
    </div>
  );
};

export default Category;
