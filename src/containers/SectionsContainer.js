import React, {Component} from 'react'
import Section from '../components/Section'
import {connect} from 'react-redux'
import {fetchImage} from '../actions/imagesActions'
import {substractDate} from '../actions/dateActions'

class Sections extends Component {
  componentDidMount () {
    this.loadSingleImage()
    this.loadSingleImage()
    this.loadSingleImage()
    this.loadSingleImage()

    document.addEventListener('scroll', event => {
      const d = document.documentElement
      const offset = d.scrollTop + window.innerHeight
      const height = d.offsetHeight

      if ((height - offset < 200) && !this.props.pending) {
        console.log('start fetching')
        this.loadSingleImage()
      }
    })
    this.loadSingleImage()
  }

  showImages () {
    let data = this.props.images.imagesData
    return data.map((image, id) => {
      return <Section url={image.url} key={id} id={id} />
    })
  }

  loadSingleImage () {
    const date = new Date(this.props.date)
    console.log(date)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    this.props.fetchImage(year, month, day)
    this.props.substractDate()
  }

  loadMore () {
    this.props.fetchImage(2016, 8, 5)
  }

  render () {
    return (
      <div>
        {this.showImages()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    date: state.date,
    pending: state.images.pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: (year, month, day) => {
      dispatch(fetchImage(year, month, day))
    },
    substractDate: () => {
      dispatch(substractDate())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sections)
