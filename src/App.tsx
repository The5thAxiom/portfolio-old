import React from 'react';
import { Outlet } from 'react-router-dom';
import BackgroundShapes from './components/backgroundShapes';
import Navigation from './components/navigation';
import SideLinks from './components/sideLinks';

export default function App() {
    return (
        <>
            <BackgroundShapes />
            <SideLinks />
            <main>
                <Outlet />
            </main>
            <Navigation />
        </>
    );
}
