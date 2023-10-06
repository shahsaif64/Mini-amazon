import React, {useEffect} from 'react'
import './cart.css'
import { Divider } from '@mui/material'
import amzfulfil from '../../assets/static/afullfilled.png';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import { useSelector,useDispatch } from 'react-redux'
import { getCartItems } from '../../redux/slices/cart/cartSlice';
import AlertBox from '../alert/AlertBox';

const Cart = () => {
  const dispatch= useDispatch();
  const {cartItems,msg,error} = useSelector((state) => state.cart);
   
  
  const totalPrice = cartItems.reduce((total, item) =>total+item.price.cost, 0);
  useEffect(() => {
    if(localStorage.getItem('Webtoken')){
      dispatch(getCartItems(localStorage.getItem('Webtoken')))
    }
    // eslint-disable-next-line
  }, [])
 
  return (
    <div className='cart_section'>
      <AlertBox success={msg} error={error} loading={false}/>
      <div className="cart_container">

        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>select all items</p>
          <span className='left_buy_price'>Price</span>
          <Divider />
          {cartItems.length === 0 ? <h3 style={{ textAlign: "center" }}>0 Items in the Cart</h3> :
            cartItems.map((item) => {
              return (
                <div className="item_container" key={item._id}>
                  <img src={item.url} alt="" />

                  <div className="item_details">
                    <h3>{item.title.longTitle}</h3>
                    <h3>{item.title.shortTitle}</h3>
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
          <Subtotal itemCount={cartItems.length} amount={totalPrice}/>

        </div>
        <Right itemCount={cartItems.length} amount={totalPrice}/>
      </div>
    </div>
  )
}

export default Cart