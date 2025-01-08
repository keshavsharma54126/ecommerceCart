import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Cart from './componetns/cart'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from './componetns/layout'
import { Provider } from 'react-redux'
import store from './store/store'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}><Router >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router></Provider>
  </StrictMode>,
)
