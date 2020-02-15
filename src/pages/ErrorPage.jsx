import React from "react";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Hero>
      <HeroBanner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </HeroBanner>
    </Hero>
  );
};

export default ErrorPage;
