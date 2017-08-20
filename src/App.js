import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SectionsContainer from './containers/SectionsContainer'
import styles from './styles.module.styl'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>
          <Sidebar />
          <SectionsContainer className={styles.main} />
        </div>
      </div>
    )
  }
}

export default App
