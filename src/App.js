import React, { Component } from 'react'
import SidebarContainer from './containers/SidebarContainer'
import Header from './components/Header'
import SectionsContainer from './containers/SectionsContainer'
import styles from './styles.module.styl'
import { goToTop } from 'react-scrollable-anchor'

class App extends Component {
  componentDidMount () {
    // axios.get('https://api.nasa.gov/planetary/apod?hd=true&date=2015-5-5&api_key=aG61HfHn7T4yzG1Iup2tdHa3YhQ7ENtAtUvmdTbs')
    // .then(response => {
    //   console.log(response)
    // })
    goToTop()
  }
  render () {
    return (
      <div>
        <Header />
        <div>
          <SidebarContainer />
          <SectionsContainer className={styles.main} />
        </div>
      </div>
    )
  }
}

export default App
