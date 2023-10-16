import React from 'react'

export const Animals = () => {
     const animals = [
       { label: "Horse" },
       { label: "Turtle" },
       { label: "Elephant" },
       { label: "Monkey" },
     ];
  return <ol>{animals.map((el)=> <li>{el.label}</li>)}</ol>;
}
