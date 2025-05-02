import React from "react";
import "../Category.css";

const RadioBtn = ({ title, name }) => {
  return (
    <div>
      <label className="sidebar-lable-container">
        <input type="radio" name={name} />
        <span className="checkmark"></span>
        <span className="label-text">{title}</span>
      </label>
    </div>
  );
};

export default RadioBtn;
