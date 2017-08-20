import React, {Component} from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import throttle from 'lodash/throttle'
import Section from '../components/Section'

class Sections extends Component {
  constructor () {
    super()
    this.images = [
      'https://cdn.pixabay.com/photo/2017/08/12/19/01/walking-2635038_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_960_720.jpg'
    ]
  }
  render () {
    return (
      <main>
        {this.images.map((image, id) => {
          console.log(image + '     ' + id)
          return <Section image={image} id={id} />
        }) }
      </main>
    )
  }
}

export default Sections
