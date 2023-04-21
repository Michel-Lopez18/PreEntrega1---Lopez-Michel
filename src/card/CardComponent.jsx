import React from "react";

const CardComponent = (props) => {
  const { data } = props;
  console.log(data);
  const { image, title, description } = data;
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-card" src={image} alt="" />
        <h5 className="card-title container">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary container">Agregar</button>
      </div>
    </div>
  );
};

export default CardComponent;
