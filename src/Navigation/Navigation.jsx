import React from "react";
import "./Navigation.css";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search to your liking..."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <PiShoppingCartSimpleBold className="nav-icons" />
        </a>
        <a href="#">
          <FaRegUser className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
