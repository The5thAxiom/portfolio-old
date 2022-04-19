import React from 'react';
import { socialLinks } from '../data';
import './sidelinks.css';

export default function SideLinks() {
    return (
        <nav id='sidelinks'>
            {socialLinks.map((link, index) => (
                <a
                    className='sidelinks-link'
                    key={index}
                    href={link.link}
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className='sidelinks-circle'>{link.icon}</div>
                    <br />
                </a>
            ))}
        </nav>
    );
}
