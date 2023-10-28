import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, /* removeItemFromCart */ } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

   /*  const handleRemoveItem = (productId) => {
        removeItemFromCart(productId);
    } */

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id} className='div-carrito'>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio: ${prod.precio}</p>
                    <p>Total: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                   {/*  <button onClick={() => handleRemoveItem(prod.id)}>Eliminar</button> */}
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Total: ${precioTotal()}</h2>
                <button className="vaciar" onClick={handleVaciar}>Vaciar carrito</button>
                <Link to="/checkout" className='finalizar-compra-btn'>Finalizar compra</Link>
            </> :
            <h2>No tienes productos en tu carrito</h2>
        }
        
    </div>
  )
}

export default Carrito