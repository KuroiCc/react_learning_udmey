import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import styles from './App.module.css'
import { HomePage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<h1>登陆页面</h1>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
