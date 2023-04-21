import React from "react";
import { NavLink } from "react-router-dom";

const CardComponent = (props) => {
  const { data } = props;
  console.log(data);
  const { image, title, description, id } = data;
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-card" src={image} alt="" />
        <h5 className="card-title container">{title}</h5>
        <p className="card-text">{description}</p>
        <NavLink to={`/product/${id}`}>
          <button className="btn btn-primary container">Detalle</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CardComponent;
