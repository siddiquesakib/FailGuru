import React from "react";
import Pricing from "../Payment/Pricing";
import Slider from "../../Component/Home/Slider";
import Footer from "../../Component/Shared/Footer/Footer";
import Feature from "../../Component/Home/Feature";

const Home = () => {
  return (
    <div>
      <Slider />
      <Feature />
      <Pricing />
    </div>
  );
};

export default Home;
