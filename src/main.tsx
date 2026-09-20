import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Guard against benign browser warnings and external script issues
if (typeof window !== 'undefined') {
  const isBenign = (msg?: string) => {
    if (!msg || typeof msg !== 'string') return false;
    return msg.includes('ResizeObserver loop') || msg.includes('styled-components');
  };

  window.addEventListener('error', (event) => {
    if (isBenign(event.message) || isBenign(event.error?.message)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    const msg = typeof event.reason === 'string' ? event.reason : event.reason?.message;
    if (isBenign(msg)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });
}

const container = document.getElementById('root')!;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

