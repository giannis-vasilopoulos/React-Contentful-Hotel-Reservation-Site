import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured);
    const maxPrice = Math.max(...rooms.map(room => room.price));
    const maxSize = Math.max(...rooms.map(room => room.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
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

  getSingleRoom = slug => {
    const tempRooms = [...this.state.rooms];
    return tempRooms.find(room => room.slug === slug);
  };
  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };
  filterRooms = () => {
    console.log("hello");
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getSingleRoom: this.getSingleRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
