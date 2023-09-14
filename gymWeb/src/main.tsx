import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { UserProvider } from './context/userContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <UserProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </UserProvider>
);
