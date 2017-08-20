import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Section from './components/Section'
import styles from './styles.module.styl'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>
          <Sidebar />
          <main className={styles.main}>
            <Section />
            <Section />
            <Section />
          </main>
        </div>
      </div>
    )
  }
}

export default App
