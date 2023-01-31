import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '../../styles/global.css';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
