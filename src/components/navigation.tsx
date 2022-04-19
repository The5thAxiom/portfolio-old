import React from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from '../pages';
import './navigation.css';

export default function Navigation() {
    return (
        <nav id='navigation'>
            {pages.map((page, index) => (
                <NavLink
                    key={index}
                    to={page.link}
                    className={({ isActive }) =>
                        '' + (isActive ? 'current-page' : 'other-page')
                    }
                >
                    {page.title}
                </NavLink>
            ))}
        </nav>
    );
}
