import React from "react";
import "./Price.css";
import RadioBtn from "../Category/components/RadioBtn";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="slidebar-title price-title">Price</h2>
      <RadioBtn title={"All"} name={"Test1"} />
      <RadioBtn title={"$0 - $50"} name={"Test1"} />
      <RadioBtn title={"$50 - $100"} name={"Test1"} />
      <RadioBtn title={"$100 - $150"} name={"Test1"} />
      <RadioBtn title={"Over $150"} name={"Test1"} />
    </div>
  );
};

export default Price;
