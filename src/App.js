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
    console.log(process.env.PUBLIC_URL)
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route path={process.env.PUBLIC_URL + `/`} component={Home} exact ignoreScrollBehavior />
            <Route path={process.env.PUBLIC_URL + `/photo/:date`} component={SingleItem} ignoreScrollBehavior />
          </div>
        </Router>

      </MuiThemeProvider>
    )
  }
}

export default App
