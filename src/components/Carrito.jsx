import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio: ${prod.precio}</p>
                    <p>Total: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar carrito</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>No tienes productos en tu carrito</h2>
        }
        
    </div>
  )
}

export default Carrito