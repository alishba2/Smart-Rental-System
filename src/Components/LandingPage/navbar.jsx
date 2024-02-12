import React, { useState } from 'react';
import './landing.css';
import img from '../../../src/assets//landingpage2.jpg';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className={`nav-bar ${menuOpen ? 'open' : ''}`}>
                <div>
                    <span className='logo'>Location</span>
                </div>
                <div className='menu-toggle' onClick={toggleMenu}>
                    ☰
                </div>
                <div>
                </div>
                <ul className={`links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Properties</a></li>

                    <li><a href="#">Contact</a></li>
                    <li className='button-container'>
                        <span className='login'>Login</span>
                        <span className='createAcntBtn'>Create Account</span>
                    </li>


                </ul>

            </nav>

        </div>
    );
}
