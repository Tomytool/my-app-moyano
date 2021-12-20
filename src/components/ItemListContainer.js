import React from 'react';
import '../css/ItemListContainer.css';
import { FaWindowMinimize } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const ItemListContainer = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = React.useState(0);

  return (
    <>
      <div className="container">
        <div className="card">
          <img src="https://picsum.photos/200/200" alt="" />
          <div className="eleccion">
            <FaWindowMinimize
              onClick={() => {
                if (contador === 0) {
                  setContador(0);
                  alert('No hay stock disponible');
                } else {
                  setContador(contador - 1);
                }
              }}
            />
            <p>{contador}</p>
            <FaPlus
              onClick={() => {
                if (stock > contador) {
                  setContador(contador + 1);
                } else {
                  alert('No hay stock disponible');
                }
              }}
            />
          </div>
          <button onClick={() => alert('se agregaron: ' + contador)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
