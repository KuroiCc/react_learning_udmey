import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams()
  return <h1>DetailPage{touristRouteId}</h1>
}
