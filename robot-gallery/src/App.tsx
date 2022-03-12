import React from 'react'
import './App.css'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {robots.map((robot) => (
        <Robot key={robot.id} email={robot.email} name={robot.name} />
      ))}
    </ul>
  )
}

export default App
