import './App.css';
import NavBar from './components/NavBar';
import Boton from './components/boton';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

let arrayCompra = { nombre: '', cantidad: 0 };
function App() {
  const actualizar = (dato) => {
    arrayCompra = { cantidad: dato };
    console.log(arrayCompra);
    return setContador(dato);
  };

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <NavBar compra={contador} />
      <Boton dato={actualizar} />
      <ItemListContainer stock={10} initial={1} />
    </div>
  );
}

export default App;
