import React from "react";
import Town from "./TownComponent";

export default function City({ city, index }) {
  const [townIndex, setTownIndex] = React.useState(index);
  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((Cityitem, index) => (
        <li onClick={handleTown} id={`city${index + 1}`} key={index}>
          {Cityitem.name}
        </li>
      ))}
      {townIndex !== -1 && <Town town={city.cities[townIndex]} />}
    </>
  );
}
