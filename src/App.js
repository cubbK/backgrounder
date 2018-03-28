import React, { Component } from 'react'
import Home from './pages/Home'
import SingleItem from './pages/SingleItem'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
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
        <Router>
          <div>
            <Route path={`/`} component={Home} exact />
            <Route path={`/photo/:date`} component={SingleItem} />

          </div>
        </Router>

      </MuiThemeProvider>
    )
  }
}

export default App
