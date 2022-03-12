import React from 'react'

interface RobotProps {
  key: number
  name: string
  email: string
}

const Robot: React.FC<RobotProps> = ({ key, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${key}`} alt="Robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

export default Robot
