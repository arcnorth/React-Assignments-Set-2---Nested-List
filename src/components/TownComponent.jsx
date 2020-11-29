import React from "react";

export default function Town({ town }) {
  return (
    <>
      {town.towns.map((Townitem, index) => (
        <li id={`town${index + 1}`} key={index}>
          {Townitem.name}
        </li>
      ))}
    </>
  );
}
