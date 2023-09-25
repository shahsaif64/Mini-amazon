import React from 'react'
import './cart.css'
import {Divider} from '@mui/material'
import amzfulfil from '../../assets/static/afullfilled.png';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Cart = () => {
  return (
    <div className='cart_section'>
      <div className="cart_container">

        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>select all items</p>
          <span className='left_buy_price'>Price</span>
          <Divider/>

            <div className="item_container">
              <img src="https://rukminim1.flixcart.com/image/410/410/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="" />
  
               <div className="item_details">
                <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize)</h3>
                <h3>Smart Watches</h3>
                <h3 className='diffrentprice'>$23.22</h3>
                <p className='unusuall'>Usually dispatched in 8 days.</p>
                <p>Eligible for FREE Shipping</p>
                <img src={amzfulfil} alt="" />
                <Option/>
               </div>
               <h3 className='item_price'>$23.22</h3>

            </div>
            <Divider/>
            <Subtotal/>

        </div>
        <Right/>
      </div>
    </div>
  )
}

export default Cart