import React from 'react';
import './newnav.css';
import navdata from '../../assets/static/nav.jpg'

const Newnav = () => {
  return (
    <div className='new_nav'>
        <div className="nav_data">
            <div className="left_data">
                <p>All</p>
                <p>Mobile</p>
                <p>Best Seller</p>
                <p>Fashion</p>
                <p>Customer Services</p>
                <p>Electronics</p>
                <p>Prime</p>
                <p>Today's Deal</p>
                <p>Amazon Pay</p>
            </div>
            <div className="right_data">
                <img src={navdata} alt="navdata" />
            </div>
        </div>
    </div>
  )
}

export default Newnav