import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial);

  const Increment = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const Decrement = () => {
    if(quantity > 1) { 
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='Counter'>
      <button className='Button' onClick={Decrement}>-</button>
      <h1 className='Number'> {quantity}</h1>
      <button className='Button' onClick={Increment}>+</button>
    </div>
  );
}

export default ItemCount;
