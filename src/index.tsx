import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { pages } from './pages';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter basename=''>
            <Routes>
                <Route path='/' element={<App />}>
                    {pages.map((page, index) =>
                        index === 0 ? (
                            <Route key={index} index element={page.content} />
                        ) : (
                            <Route
                                key={index}
                                path={page.link}
                                element={page.content}
                            />
                        )
                    )}
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
