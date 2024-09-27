import React from 'react';
import Logo from '../assets/Library.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className='footer__logo'>
                            <img className='footer__logo--img' src={Logo} alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link className='footer__link' to="/">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" className='footer__link'>Books</Link>
                        <Link to="/cart" className='footer__link'>Cart</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2024 Library</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
