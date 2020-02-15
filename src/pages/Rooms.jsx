import React from "react";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <HeroBanner title="our rooms">
        <Link to="/rooms" className="btn-primary">
          show gallery
        </Link>
      </HeroBanner>
    </Hero>
  );
};

export default Rooms;
