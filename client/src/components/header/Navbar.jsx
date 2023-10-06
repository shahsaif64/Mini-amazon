import React from 'react'
import './navbar.css';
import amazonLogo from '../../assets/static/amazon_PNG25.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';




const Navbar = () => {
    const productCount= useSelector((state)=>state.cart.count);
    const location= useLocation();
  
    
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                       <Link to="/"><img src={amazonLogo} alt="amazonLogo" /></Link> 
                    </div>
                    <div className="nav_searchbar">
                        <input type="text" name="" id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="nav_btn">
                       {location.pathname==='/login'?<Link to="/signup">Signup</Link>:!localStorage.getItem('Webtoken') && <Link to="/login">Login</Link>} 
                    </div>
                    {localStorage.getItem('Webtoken') && <Dropdown />}

                    <Link to="/cart">
                    <div className="cart_btn">
                        <Badge badgeContent={productCount} color="primary">
                        <ShoppingCartIcon id="icon"/>
                        </Badge>
                        <p>Cart</p>
                    </div>
                    </Link>
                    
                    
                    

                </div>
            </nav>

        </header>
    )
}

export default Navbar