import React from 'react'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map((robot) => (
          <Robot key={robot.id} id={robot.id} email={robot.email} name={robot.name} />
        ))}
      </div>
    </div>
  )
}

export default App
