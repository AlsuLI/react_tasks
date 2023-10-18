import React from "react";
import { useState } from "react";

// Задание:
//    Написать компонент, который выводит число 999 и две кнопки (плюс и минус).
//    По кликам на кнопки число увеличивается/уменьшается на 5

export const Counter = () => {
  const [counter, setCounter] = useState(999);
  const countPlus = () => {
   setCounter(counter + 1)
 }
  const countMinus = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
    </div>
  );
};
