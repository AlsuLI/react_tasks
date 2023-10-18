import React from 'react'
import { useState } from 'react'

export const SayHello = ({name}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div class="jumbotron">
      <span>  {toggle ? 'Привет' : 'Пока'} {name}</span>
      <button onClick={()=>setToggle(!toggle)}>toggle</button>
    </div>
  );
}
