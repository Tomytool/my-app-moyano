import React from 'react';
import { IoMdCart } from 'react-icons/io';

const CartWidget = (props) => {
  return (
    <>
      <div className="icono">
        <IoMdCart />
        <p>{props.compra}</p>
      </div>
    </>
  );
};

export default CartWidget;
