import React from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'

import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface State {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  robotsGallery: any[]
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotsGallery: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ robotsGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotsGallery.map((robot) => (
            <Robot key={robot.id} id={robot.id} email={robot.email} name={robot.name} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
