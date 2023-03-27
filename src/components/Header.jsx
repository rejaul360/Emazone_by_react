import React from 'react';
import './Header.css'
import logo from '../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
          
            <div className='header_area'>
            <img src={logo} alt="" />
            <div>
                <a href="shope">Shope</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
            </div>
        </nav>
    );
};

export default Header;