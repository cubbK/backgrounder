import React, { Component } from 'react'
import Header from './components/Header'
import SectionsContainer from './containers/SectionsContainer'
import styles from './styles.module.styl'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div>
            <SectionsContainer className={styles.main} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
