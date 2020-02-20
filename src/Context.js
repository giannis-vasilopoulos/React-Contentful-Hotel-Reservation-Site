import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";
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

  getData = async () => {
    try {
      let { items } = await Client.getEntries({
        content_type: process.env.REACT_APP_CONTENT_TYPE_ID,
        order: "fields.price"
      });
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
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getData();
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
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity === capacity);
    }

    price = parseInt(price);
    tempRooms = tempRooms.filter(room => room.price <= price);

    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets);
    }
    this.setState({
      sortedRooms: tempRooms
    });
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
