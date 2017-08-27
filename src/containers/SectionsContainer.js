import React, {Component} from 'react'
import Section from '../components/Section'
import InfiniteScroll from 'react-infinite-scroll-component'
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
    let images = []
    while (images.length !== 15) {
      const date = new Date(this.props.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      console.log('epoch date:' + this.props.date)
      console.log('date:' + year + '-' + month + '-' + day)
      const image = await this.fetchImage(year, month, day)
      images.push(image)
      image && this.props.addImage(image.data)
      this.props.substractDate(1)
    }
    return images
  }

  async componentDidMount () {
    await this.fetchData()
    this.props.substractDate(1)
  }

  render () {
    return (
      <InfiniteScroll
        // pullDownToRefresh
        // pullDownToRefreshContent={
        //   <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
        // }
        releaseToRefreshContent={
          <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
        }
        // refreshFunction={this.refresh}
        next={this.fetchData}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {this.props.images.map((el, id) => {
          return (
            <Section id={id} key={'section-' + id} image={el && el.url} />
          )
        })}
      </InfiniteScroll>
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
