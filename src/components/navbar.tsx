import React from 'react';
import { socialLinks } from '../data';
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            {socialLinks.map((link, index) => (
                <a
                    className='navbar-link'
                    key={index}
                    href={link.link}
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className='navbar-circle'>{link.icon}</div>
                    <br />
                </a>
            ))}
        </nav>
    );
}
