import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap';
import App from './components/App';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Elemento #root non trovato nel DOM');
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
