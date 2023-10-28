import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import Swal from 'sweetalert2'

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {

        Swal.fire({
            title: 'Gracias por tu compra',
            html: `<p>El folio de tu pedido es: ${pedidoId}</p>`,
            icon: 'success',
            showConfirmButton: true  
          });
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout