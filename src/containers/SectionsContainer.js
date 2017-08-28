import React, {Component} from 'react'
import Section from '../components/Section'
import InfiniteScroll from 'redux-infinite-scroll'
import axios from 'axios'
import {connect} from 'react-redux'

class Sections extends Component {
  fetchImage (year, month, day) {
    return axios.get(`https://api.nasa.gov/planetary/apod?hd=true&date=${year}-${month}-${day}&api_key=aG61HfHn7T4yzG1Iup2tdHa3YhQ7ENtAtUvmdTbs`)
    .then(response => {
      if (response.data.media_type === 'video') {
        throw new Error('It"s a video, not image, passing')
      } else {
        return response
      }
    }).catch(err => {
      console.log('err: ' + err)
    })
  }

  async fetchData () {
    const date = new Date(this.props.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const image = await this.fetchImage(year, month, day)
    image && this.props.addImage(image.data)
    this.props.substractDate()

    return image
  }

  async componentDidMount () {
    await this.fetchData()
    this.props.substractDate()
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sections)
