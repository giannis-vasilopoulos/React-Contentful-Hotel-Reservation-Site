import React from "react";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <HeroBanner title="our rooms">
          <Link to="/rooms" className="btn-primary">
            show gallery
          </Link>
        </HeroBanner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
