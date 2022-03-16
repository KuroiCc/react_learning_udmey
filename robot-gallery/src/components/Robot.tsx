import React, { useContext } from 'react'
import styles from './Robot.module.css'

import { appContext, appSetStateContext } from '../AppState'

interface RobotProps {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)
  const handleAddToCart = () => {
    setState((state) => ({
      ...state,
      shoppingCart: {
        items: [...state.shoppingCart.items, { id, name }]
      }
    }))
  }

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>author: {value.username}</p>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  )
}

export default Robot
