import React from "react";
import "../Product/Product.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="shoe"
        className="card-image"
      />
      <div className="card-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-rating">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className="total-reviews">123</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$300</del> $200
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
