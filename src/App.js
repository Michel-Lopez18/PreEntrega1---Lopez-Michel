import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer saludo={"Hola, bienvenido a mi ecommerce!"} />
    </div>
  );
}

export default App;
