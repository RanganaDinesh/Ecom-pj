import React from "react";
import BestSellers from "../../Utilities/BestSellers/BestSellers";
import FeaturedProducts from "../../Utilities/FeaturedProducts/FeaturedProducts";
import ProductShowcase from "../../Utilities/ProductShowcase/ProductShowcase";
import Services from "../../Utilities/Services/Services";
import "./Home.css";
import image from './videos/2_corousel.png'


const Home = () => {
  const show = () => {
    setTimeout(() => {
      document.getElementById("banner-video").style.visibility = "visible";
    }, 500);
  };

  show();

  return (
    <React.Fragment>
       <div className='box-sliding'>
       
       <img src={image} alt="" className='coro1' />
 </div>
      <div className="banner">
        <video id="banner-video" loop muted></video>
      </div>
      <div className="best-sellers">
        <BestSellers />
      </div>
      <div className="product-overview">
        <ProductShowcase />
      </div>
      <Services />
      <FeaturedProducts />
    </React.Fragment>
  );
};

export default Home;
