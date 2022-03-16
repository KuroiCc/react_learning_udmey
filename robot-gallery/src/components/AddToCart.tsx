import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
import { RobotProps } from './Robot'

type WithAddToCart = Omit<RobotProps, 'handleAddToCart'>

const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  const WrappedComponent: React.FC<WithAddToCart> = (props) => {
    const setState = useContext(appSetStateContext)
    const handleAddToCart = (id: number, name: string) => {
      console.log('aaaa')

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

export default withAddToCart
