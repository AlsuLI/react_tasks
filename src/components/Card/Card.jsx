

export const Card = ({ title, article, link, button, img }) => {
  const style = { width: "18rem"};
  return (
    <>
      <div className="card" style={style}>
        <img src={img} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{article}</p>
          <a href={link} className="btn btn-primary">
            {button}
          </a>
        </div>
      </div>
      <span></span>
    </>
  );
};

