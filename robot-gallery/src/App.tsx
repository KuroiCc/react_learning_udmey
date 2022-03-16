/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'

import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/ShoppingCart'

const App: React.FC = () => {
  const [robotsGallery, setRobotsGallery] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setRobotsGallery(data))
      .catch((error) => setError(error.message))

    setLoading(false)
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <ShoppingCart />
      {error && <div>site error: {error}</div>}
      {
        // prettier-ignore
        loading
          ? (<h2>loading...</h2>)
          : (<div className={styles.robotList}>
            {robotsGallery.map((robot: any, index: number) =>
              index % 2 === 0
                ? (<Robot key={robot.id} id={robot.id} email={robot.email} name={robot.name} />)
                : (<RobotDiscount key={robot.id} id={robot.id} email={robot.email} name={robot.name} />)
            )}
          </div>)
      }
    </div>
  )
}

export default App
