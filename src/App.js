import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ProductsViews from "./views/ProductsViews";

import CategoriaViews from "./views/CategoriaViews";
import DetalleViews from "./views/DetalleViews";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<ProductsViews />} />
        <Route path="/categorias/:categoria" element={<CategoriaViews />} />
        <Route path="/product/:id" element={<DetalleViews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
