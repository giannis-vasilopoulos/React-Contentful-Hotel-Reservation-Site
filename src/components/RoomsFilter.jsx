import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
import { getUnique } from "../utils/getUnique";
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  let people = getUnique(rooms, "capacity");

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*  select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={handleChange}
            value={type}
          >
            {types.map((type, i) => {
              return (
                <option value={type} key={i}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}

        {/*  guests type */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            onChange={handleChange}
            value={capacity}
          >
            {people.map((person, i) => {
              return (
                <option value={person} key={i}>
                  {person}
                </option>
              );
            })}
          </select>
        </div>
        {/* end guests type */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room price {price}€</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* end room price*/}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}
