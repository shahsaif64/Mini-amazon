import React from 'react'
import './navbar.css';
import amazonLogo from '../../assets/static/amazon_PNG25.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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
                       {location.pathname==='/signin'?<Link to="/signup">Signup</Link>:<Link to="/signin">Signin</Link>} 
                    </div>

                    <Link to="/cart">
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon id="icon"/>
                        </Badge>
                        <p>Cart</p>
                    </div>
                    </Link>
                    
                    <Avatar className='avatar' />

                </div>
            </nav>

        </header>
    )
}

export default Navbar