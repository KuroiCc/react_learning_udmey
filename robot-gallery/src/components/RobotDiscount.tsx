import React, { useContext } from 'react'
import styles from './Robot.module.css'

import { appContext } from '../AppState'
import withAddToCart from './AddToCart'

export interface RobotProps {
  id: number
  name: string
  email: string
  handleAddToCart: (id: number, name: string) => void
}

const Robot: React.FC<RobotProps> = ({ id, name, email, handleAddToCart }) => {
  const value = useContext(appContext)

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="Robot" />
      <h3>Discounted!</h3>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>author: {value.username}</p>
      <button
        onClick={() => {
          handleAddToCart(id, name)
        }}
      >
        add to cart
      </button>
    </div>
  )
}

export default withAddToCart(Robot)
