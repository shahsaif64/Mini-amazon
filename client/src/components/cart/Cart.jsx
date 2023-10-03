import React from 'react'
import './cart.css'
import { Divider } from '@mui/material'
import amzfulfil from '../../assets/static/afullfilled.png';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart)
  // const totalAmount = () => {
  //   let amount = 0
  //   for (const item of cartProducts) {
  //     amount += item.price.cost;
  //   }
  //   return amount;
  // }
   
  
  const totalPrice = cartProducts.reduce((total, item) =>total+item.price.cost, 0);

 
  return (
    <div className='cart_section'>
      <div className="cart_container">

        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>select all items</p>
          <span className='left_buy_price'>Price</span>
          <Divider />
          {cartProducts.length === 0 ? <h3 style={{ textAlign: "center" }}>0 Items in the Cart</h3> :
            cartProducts.map((item) => {
              return (
                <div className="item_container" key={item._id}>
                  <img src={item.url} alt="" />

                  <div className="item_details">
                    <h3>{item.title.longTitle}</h3>
                    <h3>{item.title.shortTitle}</h3>
                    <h3 className='diffrentprice'>$23.22</h3>
                    <p className='unusuall'>Usually dispatched in 8 days.</p>
                    <p>Eligible for FREE Shipping</p>
                    <img src={amzfulfil} alt="" />
                    <Option productId={item._id} />
                  </div>
                  <h3 className='item_price'>&#x20B9;{item.price.cost}</h3>
                </div>
              )
            })}

          <Divider />
          <Subtotal itemCount={cartProducts.length} amount={totalPrice}/>

        </div>
        <Right itemCount={cartProducts.length} amount={totalPrice}/>
      </div>
    </div>
  )
}

export default Cart