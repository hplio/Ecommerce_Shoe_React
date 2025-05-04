import React from "react";
import "../Category.css";

const RadioBtn = ({ title, name, handelChange, value, color }) => {
  return (
    <label className="sidebar-lable-container">
      <input type="radio" name={name} onChange={handelChange} value={value} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      <span className="label-text">{title}</span>
    </label>
  );
};

export default RadioBtn;
