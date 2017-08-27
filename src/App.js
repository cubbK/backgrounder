import React, { Component } from 'react'
import Header from './components/Header'
import SectionsContainer from './containers/SectionsContainer'
import styles from './styles.module.styl'
import { goToTop } from 'react-scrollable-anchor'

class App extends Component {
  componentDidMount () {
    goToTop()
  }
  render () {
    return (
      <div>
        <Header />
        <div>
          <SectionsContainer className={styles.main} />
        </div>
      </div>
    )
  }
}

export default App
