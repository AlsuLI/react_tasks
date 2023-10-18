import React from 'react'
import { useState } from 'react';

// Задание:
//    Написать компонент который меняет выравнивание текста (text-align) 
//    у элемента h2. По клику на кнопку Toggle, меняется выравнивание: 
//    сначала по левому краю, потом по центру, потом по правому краю.
// HTML:

export const TextToggle = () => {
  const [toggle, setToggle] = useState("left");
 
  const alignChanger = () => {
 switch (toggle) {
   case 'left':
     return setToggle("center");
     break;
   case 'center':
     return setToggle("right");
   break;
   case 'right':
     return setToggle('left')
   break;
   default: 
     return setToggle("left");
  }
  };
  return (
    <div>
      <h2 style={{ textAlign: toggle }}>Align me</h2>
      <button onClick={() => alignChanger()}>Toggle</button>
    </div>
  );
}
