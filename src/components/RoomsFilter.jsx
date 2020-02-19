import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
import { getUnique } from "../utils/getUnique";
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  console.log(context);
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
      </form>
    </section>
  );
}
