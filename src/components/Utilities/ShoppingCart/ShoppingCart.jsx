import React from "react";


import "./ShoppingCart.css";

const ShoppingCart = () => {
 
  return (
    <React.Fragment>
   
      <div className="shopping-cart">
        <button className="btn-cart">
          <span className="material-symbols-outlined" >shopping_cart</span>
        
        </button>
      </div>
      {/* </Link> */}
    </React.Fragment>
  );
};

export default ShoppingCart;
