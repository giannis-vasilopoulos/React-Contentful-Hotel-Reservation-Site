import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  formatData(items) {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
