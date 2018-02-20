import React, { Component } from 'react'
import Section from './sections/Section'
import Loading from 'components/Loading'
import { connect } from 'react-redux'
import { fetchImage } from 'actions/imagesActions'
import { substractDate } from 'actions/dateActions'
import date from 'date-and-time'

class Sections extends Component {

  componentDidMount () {
    this.loadSingleImage()
    
    document.addEventListener('scroll', event => {
      const d = document.documentElement
      const offset = d.scrollTop + window.innerHeight
      const height = d.offsetHeight
      
      if ((height - offset < 200) && !this.props.pending) {
        console.log('start fetching')
        this.loadSingleImage()
        this.loadSingleImage()
        this.loadSingleImage()
        this.loadSingleImage()
      }
    })
  }

  showImages () {
    let data = this.props.images.imagesData
    return data.map((image, id) => {
      return <Section url={image.url} key={id} id={id} />
    })
  }

  loadSingleImage () {
    const dateObj = date.parse(this.props.date, 'YYYY/MM/DD')
    const year = date.format(dateObj, 'YYYY')
    const month = date.format(dateObj, 'MM')
    const day = date.format(dateObj, 'DD')
    console.log(year + ' ' + month + ' ' + day)
    this.props.fetchImage(year, month, day)
    this.props.substractDate()
  }

  render () {
    return (
      <div>
        { 
          this.props.images.imagesData &&
          this.props.images.imagesData.map(image => <Section url={ image.url } /> )
        }
        {
          this.props.images.pending && <Loading />
        }
        
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