import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import styles from './main.modual.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    
    <MantineProvider>{<App />}</MantineProvider>

  </BrowserRouter>
  </StrictMode>,
)
