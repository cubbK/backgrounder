import React, { Component } from 'react'
import Home from './pages/Home'
import './styles.module.styl'

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
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
