import React from 'react';
import '../css/NavBar.css';
import CartWidget from './CartWidget';
import { FcCollaboration } from 'react-icons/fc';
function NavBar(props) {
  return (
    <>
      <nav className="menu">
        <div className="menuLogo">
          <FcCollaboration />
        </div>
        <ul>
          <li>Home</li>
          <li>Contactos</li>
          <li>venta</li>
          <li>precio</li>
          <li>Opcion5</li>
        </ul>
        <CartWidget compra={props.compra} />
      </nav>
    </>
  );
}

export default NavBar;
