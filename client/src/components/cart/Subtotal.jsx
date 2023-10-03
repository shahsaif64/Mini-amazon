import React from 'react';
import './cart.css';

const Subtotal = ({itemCount,amount}) => {
  return (
    <div className='sub_item'>
        <h3>Subtotal ({itemCount} item) : <strong style={{fontWeight:700, color:"#111"}}>&#x20B9;{amount}</strong></h3>
    </div>
  )
}

export default Subtotal