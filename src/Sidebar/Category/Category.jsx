import React from "react";
import "./Category.css";
import RadioBtn from "./components/RadioBtn";

const Category = ({ handelChange }) => {
  return (
    <div>
      <h2 className="slidebar-title">Category</h2>
      <div>
        <label className="sidebar-lable-container">
          <input type="radio" name="Test" onChange={handelChange} value="" />
          <span className="checkmark"></span>
          <span className="label-text">All</span>
        </label>
        <RadioBtn
          value={"sneakers"}
          handelChange={handelChange}
          title={"Sneakers"}
          name={"Test"}
        />
        <RadioBtn
          value={"flats"}
          title={"Flats"}
          name={"Test"}
          handelChange={handelChange}
        />
        <RadioBtn
          value={"sandals"}
          title={"Sandals"}
          name={"Test"}
          handelChange={handelChange}
        />
        <RadioBtn
          value={"heels"}
          title={"Heels"}
          name={"Test"}
          handelChange={handelChange}
        />
      </div>
    </div>
  );
};

export default Category;
