import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import BackgroundShapes from './components/backgroundShapes';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <>
            <BackgroundShapes />
            <App />
        </>
    </React.StrictMode>
);
