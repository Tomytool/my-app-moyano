import React, { useState } from 'react';

function Boton(props) {
  const [carrito, setCarrito] = useState(0);
  return (
    <>
      <button
        type="button"
        className="boton"
        onClick={() => {
          setCarrito(carrito + 1);
          props.dato(carrito);
        }}
      >
        Agregar
      </button>
      <button
        type="button"
        className="boton"
        onClick={() => {
          setCarrito(carrito - 1);
          props.dato(carrito);
        }}
      >
        Eliminar
      </button>
    </>
  );
}

export default Boton;
