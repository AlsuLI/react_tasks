import React from "react";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
export const Planets = () => {
  const planetsHtml = planets.map((item, index) => 
    <li key={index} className="list-group-item">
      {item}
    </li>
  );
  return <ul>{planetsHtml}</ul>;
};
