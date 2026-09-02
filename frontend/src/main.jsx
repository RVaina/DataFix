import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import '@fontsource/andika/700.css';
import '@fontsource/muli/latin-ext-400.css';
import '@fontsource/muli/latin-ext-400-italic.css';
import '@fontsource/neuton/400.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
