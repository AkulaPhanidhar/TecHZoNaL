import "./Home.css";
import React from "react";
import Navbar1 from "../Components/Navbar1";
import Navbar2 from "../Components/Navbar2";
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Cards />
    </div>
  );
};

export default Home;
