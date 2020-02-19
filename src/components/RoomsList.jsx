import React from "react";
import RoomListItem from "../components/RoomListItem";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched with your filters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => {
          return <RoomListItem key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}
