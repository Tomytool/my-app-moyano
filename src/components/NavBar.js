import React from 'react';
import '../css/NavBar.css';
import { IoMdCart } from 'react-icons/io';
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
        <div className="icono">
          <IoMdCart />
          <p>{props.compra}</p>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
