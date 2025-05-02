import React from "react";
import "./Product.css";
import Card from "../components/Card";


const Product = () => {
  return (
    <div>
      <section className="card-container">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </section>
    </div>
  );
};

export default Product;
