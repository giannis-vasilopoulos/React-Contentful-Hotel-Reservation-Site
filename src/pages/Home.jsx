import React from "react";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <HeroBanner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at 350€"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </HeroBanner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
