import React from "react";
import defaultImg from "../images/room-1.jpeg";
const RoomListItem = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
      </div>
    </article>
  );
};

export default RoomListItem;
