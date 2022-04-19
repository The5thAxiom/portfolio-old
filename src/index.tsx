import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import BackgroundShapes from './components/backgroundShapes';
import Navbar from './components/navbar';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { pages } from './components/pages';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter basename=''>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<>hello</>} />
                    {pages.map(page => (
                        <Route path={page.link} element={page.content} />
                    ))}
                </Route>
            </Routes>
        </HashRouter>
        {/* <>
            <BackgroundShapes />
            <Navbar />
            <App />
        </> */}
    </React.StrictMode>
);
