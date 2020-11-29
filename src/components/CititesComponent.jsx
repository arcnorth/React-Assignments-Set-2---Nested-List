import React from "react";
import Town from "./TownComponent";
export default function City({ city, index }) {
  const [town, setTown] = React.useState(index);

  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    setTown(index);
  };

  return (
    <>
      {city.cities.map((item, index) => (
        <div onClick={handleTown} id={`city${index + 1}`} key={index}>
          {item.name}
        </div>
      ))}
      <br />
      <br />
      <b>Town</b>
      {town !== -1 && <Town town={city.cities[town]} />}
    </>
  );
}
