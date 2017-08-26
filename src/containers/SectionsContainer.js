import React, {Component} from 'react'
import Section from '../components/Section'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import {connect} from 'react-redux'

class Sections extends Component {
  fetchImage (year, month, day) {
    return axios.get(`https://api.nasa.gov/planetary/apod?hd=true&date=${year}-${month}-${day}&api_key=aG61HfHn7T4yzG1Iup2tdHa3YhQ7ENtAtUvmdTbs`)
    .then(response => {
      return response
    })
  }

  async fetchData () {
    let images = []
    for (let i = 0; i < 5; i++) {
      const image = await this.fetchImage(2017, 5, 5)
      images.push(image)
      this.props.addImage(image.data)
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
        {/*<Section id={0} image={this.props.images[0] && this.props.images[0].url} />*/
          console.log(this.props.images)
        }
        {this.props.images.map((el, id) => {
          return (
            <Section id={id} key={'section-' + id} image={this.props.images[0] && this.props.images[0].url} />
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
