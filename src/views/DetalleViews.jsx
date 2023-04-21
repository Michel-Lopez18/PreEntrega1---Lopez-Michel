import React from "react";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products/";

export const DetalleViews = () => {
  const { id } = useParams();
  const [data] = useFetch(`${BASE_URL}${id}`);
  const { title, description, image } = data;
  console.log(data);
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-card" src={image} alt="" />
        <h5 className="card-title container">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DetalleViews;
