import React from "react";

export const Post = () => {
  const style = { width: 200, height: 250 };
  let data = new Date().toLocaleString("ru-Ru", {
    month: "short",
    day: "numeric",
  });
  console.log(data);
  return (
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">Animals</strong>
        <h3 className="mb-0">
          <a
            className="text-dark"
            href="https://www.iflscience.com/why-do-animals-keep-evolving-into-moles-71051"
          >
            Why Do Animals Keep Evolving Into Moles?
          </a>
        </h3>
        <div className="mb-1 text-muted">{data}</div>
        <p className="card-text mb-auto">
          Moles are strange little guys. With digger-like claws, terrible
          eyesight, hairless snoots, and an appetite for soil-dwelling insects,
          these animals are extremely well adapted to life below the Earth’s
          surface.
        </p>
        <a href="https://www.iflscience.com/why-do-animals-keep-evolving-into-moles-71051">
          Continue reading
        </a>
      </div>
      <img
        className="card-img-right flex-auto d-none d-md-block"
        alt=""
        src="https://assets.iflscience.com/assets/articleNo/71051/aImg/71242/mole-m.jpg"
        style={style}
      />
    </div>
  );
};
