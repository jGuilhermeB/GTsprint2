import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { ProductsProvider } from './Context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProductsProvider>
  </StrictMode>,
)
