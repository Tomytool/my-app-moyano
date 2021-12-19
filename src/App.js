import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Boton from './components/boton';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
