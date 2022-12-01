import React from "react";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contacts";
import Featured from "../../components/FeaturedProducts/Featured";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="Featured" />
      <Categories />
      <Featured type="Tranding" />
      <Contacts />
    </div>
  );
};

export default Home;
