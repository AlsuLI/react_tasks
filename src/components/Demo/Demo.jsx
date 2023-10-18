import React from "react";

export const Demo = () => {
  function divClick() {
    console.log("div");
  }
  function buttonClick(e) {
    console.log("button");
    e.stopPropagation();
  }

  return (
    <div onClick={divClick}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        pariatur ab recusandae in, sit qui dolor officiis laboriosam
        repellendus, nulla quidem et adipisci provident suscipit, neque sapiente
        laudantium rerum ducimus.
      </p>
      <button onClick={buttonClick}>click</button>
    </div>
  );
};
