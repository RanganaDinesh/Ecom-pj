import React from "react";
import "./ProductShowcase.css";
import iPhone from "../../Pages/Home/videos/2_corousel.png";

const ProductShowcase = () => {
  return (
    <div className="ProductShowcase-container">
      <div className="box-ProductShowcase-one">
        <div>
          <h1 className="ProductShowcase-title">iPhone 6 Plus</h1>
          <p>
            <span className="ProductShowcase-quote-one">Performance and design. </span>
            <span className="ProductShowcase-quote-two">Taken right to the edge.</span>
          </p>
          <button className="btn-ProductShowcase">Buy</button>
        </div>
      </div>
      <div className="box-ProductShowcase-two">
        <img src={iPhone} alt="iPhone 14 Pro Max" />
      </div>
    </div>
  );
};

export default ProductShowcase;
