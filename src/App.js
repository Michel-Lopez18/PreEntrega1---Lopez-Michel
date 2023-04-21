import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer";
import CardComponent from "./card/CardComponent";
import { Fragment, useEffect, useState } from "react";
import useFetch from "./utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products";

function App() {
  const [data, loading] = useFetch(BASE_URL);
  console.log(loading);
  return (
    <Fragment>
      <div>
        <NavBarComponent />
        <ItemListContainer saludo={"Hola, bienvenido a mi ecommerce!"} />

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
}

export default App;
