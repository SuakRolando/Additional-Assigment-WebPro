import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container mt-4">
      <div className="nav justify-content-center justify-content-xxl-between">
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
};

export default Products;
