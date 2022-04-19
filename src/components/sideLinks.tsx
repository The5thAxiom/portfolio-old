import React from 'react';
import { socialLinks } from '../data';
import OutboundLink from './outboundLink';
import './sidelinks.css';

export default function SideLinks() {
    return (
        <nav id='sidelinks'>
            {socialLinks.map((link, index) => (
                <OutboundLink
                    className='sidelinks-circle'
                    key={index}
                    to={link.link}
                >
                    {link.icon}
                </OutboundLink>
            ))}
        </nav>
    );
}
