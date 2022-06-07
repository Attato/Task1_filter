import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__logo">Filter._Challenge</Link>            
        </div>
    )
}

export default Header;
