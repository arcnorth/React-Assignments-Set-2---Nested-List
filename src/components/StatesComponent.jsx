import React from "react";
import City from "./CitiesComponent";

export default function State({ states }) {
  const [city, setCity] = React.useState(-1);
  const [town, setTown] = React.useState(-1);
  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    setCity(index);
    setTown(-1);
  };
  return (
    <>
      {states.map((item, index) => (
        <li key={index} onClick={handleCity} id={`state${index + 1}`}>
          {item.name}
        </li>
      ))}
      {city !== -1 && <City index={town} city={states[city]} />}
    </>
  );
}
