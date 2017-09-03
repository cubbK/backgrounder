import React, {Component} from 'react'
import Section from '../components/Section'
import {connect} from 'react-redux'
import {fetchImage} from '../actions/imagesActions'

class Sections extends Component {
  componentDidMount () {
    const date = new Date(this.props.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    console.log('started')
    this.props.fetchImage(2016, 5, 5)
  }

  render () {
    return (
      <div>
        123
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
    addImage: image => {
      dispatch({
        'type': 'ADD_IMAGE',
        'payload': image
      })
    },
    substractDate: amount => {
      dispatch({
        'type': 'SUBSTRACT_DATE',
        'payload': amount
      })
    },
    fetchImage: (year, month, day) => {
      dispatch(fetchImage(year, month, day))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sections)
