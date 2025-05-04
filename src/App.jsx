import React from "react";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import Recommanded from "./Recommanded/Recommanded";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import product from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const filtterItems = product.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  const handelInputChnage = (e) => {
    setQuery(e.target.value);
  };

  const handelChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handelClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filterDate(selected, products, query) {
    let filterProducts = products;

    if (query) {
      filterProducts = filtterItems;
    }

    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, company, color, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filterProducts.map(
      ({ title, img, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          title={title}
          img={img}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filterDate(selectedCategory, product, query);
  return (
    <>
      <Sidebar handelChange={handelChange} />
      <Navigation query={query} handelInputChnage={handelInputChnage} />
      <Recommanded handelClick={handelClick} />
      <Product result={result} />
    </>
  );
};

export default App;
