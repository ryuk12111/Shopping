import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Outlet} from 'react-router-dom';
import Hero from '../Hero/Hero';
import TopProducts from "../TopProducts/TopProducts";
import Products from "../Products/Products";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Products/>
      <TopProducts/>

    </div>
  );
};

export default Home;
