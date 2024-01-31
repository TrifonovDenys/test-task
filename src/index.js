import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ScreenSizeProvider } from 'components/Button/ScreenSizeTracker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>
  </React.StrictMode>
);
