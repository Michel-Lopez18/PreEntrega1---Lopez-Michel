import React, { Fragment } from "react";
import CardComponent from "../components/card/CardComponent";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products";

const ProductsViews = (props) => {
  const [data, loading] = useFetch(BASE_URL);
  console.log(loading);
  return (
    <Fragment>
      <div>
        {loading ? (
          <h1>Cargando</h1>
        ) : (
          data.map((producto, index) => {
            return (
              <div key={index}>
                <CardComponent data={producto} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default ProductsViews;
