import React, { useState } from "react";

export const TextAlign = () => {
  const [align, setAlign] = useState("");

  const alignChanger = (align) => {
    setAlign(align);
  };
  return (
    <div>
      <h2 style={{ textAlign: align }}>Align me</h2>
      <button onClick={() => alignChanger("left")}>Left</button>
      <button onClick={() => alignChanger("center")}>Center</button>
      <button onClick={() => alignChanger("right")}>Right</button>
    </div>
  );
};
