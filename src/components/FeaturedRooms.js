import React, { Component } from "react";
import { RoomContext } from "../Context";
class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms } = this.context;
    return <div>feature rooms hello</div>;
  }
}

export default FeaturedRooms;
