import React, {Component} from 'react'
import Section from '../components/Section'
import {connect} from 'react-redux'
import {fetchImage} from '../actions/imagesActions'

class Sections extends Component {
  componentDidMount () {
    this.props.fetchImage(2016, 5, 5)
    this.props.fetchImage(2015, 5, 5)
    setTimeout(() => {
      this.props.fetchImage(2014, 5, 5)
    }, 2000)
    setTimeout(() => {
      this.props.fetchImage(2016, 6, 5)
    }, 2000)
    setTimeout(() => {
      this.props.fetchImage(2016, 7, 5)
    }, 2000)
    setTimeout(() => {
      this.props.fetchImage(2016, 8, 5)
    }, 2000)
  }

  showImages () {
    let data = this.props.images.imagesData
    return data.map((image, id) => {
      return <Section url={image.url} key={id} id={id} />
    })
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
    date: state.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: (year, month, day) => {
      dispatch(fetchImage(year, month, day))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sections)
