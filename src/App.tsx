import React from 'react';
import CycleTrough from './components/cycleThrough';
import { general, projects } from './data';
import { Outlet, NavLink } from 'react-router-dom';
import BackgroundShapes from './components/backgroundShapes';
import Navbar from './components/navbar';
import { pages } from './components/pages';

export default function App() {
    return (
        <>
            <BackgroundShapes />

            <Navbar />
            <main>
                <nav>
                    {pages.map((page, index) => (
                        <NavLink to={page.link}>{page.title}</NavLink>
                    ))}
                </nav>
                <Outlet />
            </main>
        </>
    );
}
