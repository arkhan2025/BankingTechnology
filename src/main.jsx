import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Nav/Nav.jsx'
import Container1 from './components/Container1/Container1.jsx'
import Container2 from './components/Container2/Container2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Container1/>
    <Container2/>
  </StrictMode>
)
