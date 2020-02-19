import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import RoomListItem from "../components/RoomListItem";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms } = this.context;

    featuredRooms = featuredRooms.map(room => (
      <RoomListItem key={room.id} room={room} />
    ));

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
