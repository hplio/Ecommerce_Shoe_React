import React from "react";
import "./Product.css";

const Product = ({result}) => {
  console.log("hello");

  return (
    <div>
      <section className="card-container">
        {result}
      </section>
    </div>
  );
};

export default Product;
