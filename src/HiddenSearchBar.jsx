import React from "react";
import "./HiddenInput.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const HiddenSearchBar = () => {
  const [bgColor, setBgColor] = useState("white");
  const [inputValue, setInputValue] = useState(false);

  const onClickHandel = () => {
    setBgColor("black");
    setInputValue(true);
  };

  const onChangeHandler = (e) => {
    if (e.target.className === "container") {
      setInputValue(false);
      setBgColor("white");
    }
  };

  return (
    <div>
      <section
        className="container"
        style={{ backgroundColor: bgColor }}
        onClick={onChangeHandler}
      >
        {inputValue ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={onClickHandel} />
        )}
      </section>
    </div>
  );
};

export default HiddenSearchBar;
