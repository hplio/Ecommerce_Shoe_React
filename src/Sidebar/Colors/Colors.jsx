import React from "react";
import "./Colors.css";
import RadioBtn from "../Category/components/RadioBtn";

const Colors = ({ handelChange }) => {
  return (
    <div>
      <h2 className="slidebar-title price-title">Colors</h2>
      {/* <RadioBtn title={"All"} name={"Test2"} />
       */}
      <label className="sidebar-lable-container">
        <input type="radio" name="Test2" onChange={handelChange} value="" />
        <span className="checkmark all"></span>
        <span className="label-text">All</span>
      </label>
      <RadioBtn
        color={"black"}
        value={"black"} 
        title={"Black"}
        handelChange={handelChange}
        name={"Test2"}
      />
      <RadioBtn
        value={"White"}
        title={"White"}
        handelChange={handelChange}
        name={"Test2"}
      />
      <RadioBtn
        color={"green"}
        value={"green"}
        title={"Green"}
        handelChange={handelChange}
        name={"Test2"}
      />
      <RadioBtn
        color={"red"}
        value={"red"}
        title={"Red"}
        handelChange={handelChange}
        name={"Test2"}
      />
      <RadioBtn
        color={"blue"}
        value={"blue"}
        title={"Blue"}
        handelChange={handelChange}
        name={"Test2"}
      />
    </div>
  );
};

export default Colors;
