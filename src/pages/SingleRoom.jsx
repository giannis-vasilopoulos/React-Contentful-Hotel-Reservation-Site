import React, { Component } from "react";
import { RoomContext } from "../Context";
import defaultImg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    };
  }
  static contextType = RoomContext;
  // componentDidMount() {}
  render() {
    const { getSingleRoom } = this.context;
    const room = getSingleRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg}>
          <HeroBanner title={`${name} room`}>
            <Link to="/rooms/" className="btn-primary">
              back to rooms
            </Link>
          </HeroBanner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, i) => {
              return <img src={image} key={i} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : {price}€</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
              <h6>
                {breakfast ? "Breakfast included" : "No Breakfast included"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, i) => {
              return <li key={i}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
