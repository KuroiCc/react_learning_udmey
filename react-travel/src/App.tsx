import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import styles from './App.module.css'
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages'

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/detail/:touristRouteId" element={<DetailPage />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
