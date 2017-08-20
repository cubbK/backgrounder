import React, {Component} from 'react'
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor' // scroll more quickly than the default 400ms
import throttle from 'lodash/throttle'
import Section from '../components/Section'
configureAnchors({scrollDuration: 100})

class Sections extends Component {
  render () {
    return (
      <main>
        <Section />
        <Section />
        <Section />
      </main>
    )
  }
}

export default Sections
