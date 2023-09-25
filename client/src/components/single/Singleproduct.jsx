import React from 'react';
import './singleproduct.css'
import {Divider} from '@mui/material';

const Singleproduct = () => {
  return (
    <>
    <div className='product_section'>
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://rukminim1.flixcart.com/image/720/720/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="product_image"/>
          <div className="cart_btn">
            <button className='cart_btn1'>Add to cart</button>
            <button className='cart_btn2'>Buy now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Lorem, ipsum dolor sit amet consectetur adipis.</h4>
          <Divider/>
           <p className='mrp'>M.R.P : $25.43</p>
           <p className=''>Deal of the Day : <span style={{color:"#b12704"}}>$15.63</span> </p>
           <p className=''>You save : <span style={{color:"#b12704"}}>$10.12 (47%)</span> </p>

           <div className="discount_box">
            <h5>Discount : <span style={{color:"#111"}}>Extra 10% Off</span> </h5>
            <h4>Free Delivery : <span style={{color:"#111", fontWeight:"600"}}>Oct 8 - 21</span> Details</h4>
            <p>Fastest delivery : <span style={{color:"#111", fontWeight:"600"}}>Tomorrow 11AM</span> </p>
           </div>

           <p className='description'>About the Item : <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:".4px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorum! Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, harum!</span></p>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Singleproduct