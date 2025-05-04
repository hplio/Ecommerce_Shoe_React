import React from "react";
import "./Price.css";
import RadioBtn from "../Category/components/RadioBtn";

const Price = ({ handelChange }) => {
  return (
    <div className="ml">
      <h2 className="slidebar-title price-title">Price</h2>
      {/* <RadioBtn title={"All"} name={"Test1"} />
       */}
      <label className="sidebar-lable-container">
        <input type="radio" name="Test" onChange={handelChange} value="" />
        <span className="checkmark"></span>
        <span className="label-text">All</span>
      </label>
      <RadioBtn
        value={"50"}
        handelChange={handelChange}
        title={"$0 - $50"}
        name={"Test1"}
      />
      <RadioBtn
        value={"100"}
        title={"$50 - $100"}
        handelChange={handelChange}
        name={"Test1"}
      />
      <RadioBtn
        value={"150"}
        title={"$100 - $150"}
        handelChange={handelChange}
        name={"Test1"}
      />
      <RadioBtn
        value={"200"}
        title={"Over $150"}
        handelChange={handelChange}
        name={"Test1"}
      />
    </div>
  );
};

export default Price;
