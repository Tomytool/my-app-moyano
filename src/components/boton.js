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
          if (carrito < 0) {
            setCarrito(0);
            alert('No puedes quitar mas de lo que hay');
          } else {
            props.dato(carrito);
          }
        }}
      >
        Eliminar
      </button>
    </>
  );
}

export default Boton;
