import React from "react";
import { useState } from "react";
import s from './Accordion2.module.scss'


export const Accordion2 = () => {
  const [toggle, setToggle] = useState(true);


  const textOpener = () => {
      setToggle(!toggle)
  
 }
  return (
    <div className={s.accordion__container}>
      <div className={s.item__holder}>
        <div className={s.title__wrapper} onClick={() => textOpener()}>
          <h1 className={s.title}>Accordion item1</h1>
          <button className={s.opener}>^</button>
        </div>
        <p className={`${s.text} ${toggle ? "" : s.show}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit at nam
          eum magnam autem, fugiat distinctio odio. Maiores velit hic odio
          suscipit ipsa, obcaecati eum qui, nobis ducimus dolor vitae!
        </p>
      </div>
      <div className={s.item__holder}>
        <div className={s.title__wrapper} onClick={() => textOpener()}>
          <h1 className={s.title}>Accordion item1</h1>
          <button className={s.opener}>^</button>
        </div>
        <p className={`${s.text} ${toggle ? "" : s.show}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit at nam
          eum magnam autem, fugiat distinctio odio. Maiores velit hic odio
          suscipit ipsa, obcaecati eum qui, nobis ducimus dolor vitae!
        </p>
      </div>
      <div className={s.item__holder}>
        <div className={s.title__wrapper} onClick={() => textOpener()}>
          <h1 className={s.title}>Accordion item1</h1>
          <button className={s.opener}>^</button>
        </div>
        <p className={`${s.text} ${toggle ? "" : s.show}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit at nam
          eum magnam autem, fugiat distinctio odio. Maiores velit hic odio
          suscipit ipsa, obcaecati eum qui, nobis ducimus dolor vitae!
        </p>
      </div>
    </div>
  );
};
