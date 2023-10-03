import React from 'react';
import amzProtect from '../../assets/static/amzProtect.png';


const Right = ({itemCount,amount}) => {
  return (
    <div className='right_buy'>
        <img src={amzProtect} alt="" />
         <div className="cost_right">
            <p>Your order is eligible for FREE Delivery.</p> <br />
             <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
             <h3>Subtotal ({itemCount} item) : <span style={{fontWeight:700, color:"#111"}}>&#x20B9;{amount}</span></h3>
             <button className='rightbuy_btn'>Process to Buy</button>
             <div className="emi">
                Emi available
             </div>
         </div>
    </div>
  )
}

export default Right