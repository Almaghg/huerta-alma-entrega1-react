import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="nav-link d-flex align-items-center justify-content-space-btween" to="/carrito">
        <i className="bi bi-basket2-fill"></i>
        <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget