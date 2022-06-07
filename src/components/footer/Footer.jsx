import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <div className="container">
            <footer className="footer"> &copy; {new Date().getFullYear()} KoffeMeow. All Rights Reserved.</footer>
        </div>
    )
}

export default Footer;
