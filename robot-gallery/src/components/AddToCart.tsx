import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import { RobotProps } from './RobotDiscount'

export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  const WrappedComponent: React.FC<Omit<RobotProps, 'handleAddToCart'>> = (props) => {
    const setState = useContext(appSetStateContext)
    const handleAddToCart = (id: number, name: string) => {
      setState((state) => ({
        ...state,
        shoppingCart: {
          items: [...state.shoppingCart.items, { id, name }]
        }
      }))
    }
    return <ChildComponent {...props} handleAddToCart={handleAddToCart} />
  }
  WrappedComponent.displayName = `withAddToCart(${
    ChildComponent.displayName || ChildComponent.name || 'Component'
  })`
  return WrappedComponent
}

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const handleAddToCart = (id: number, name: string) => {
    setState((state) => ({
      ...state,
      shoppingCart: {
        items: [...state.shoppingCart.items, { id, name }]
      }
    }))
  }
  return handleAddToCart
}
