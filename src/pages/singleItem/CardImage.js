import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import { connect } from 'react-redux'
import { filter, compose, flatten } from 'ramda'
import { fetchImage } from 'actions/imagesActions'
import date from 'date-and-time'

function getItemByDate(state, date) {
  const isTheSameDate = (date1, date2) => date1 === date2
  return compose(
    flatten,
    filter(imageData => isTheSameDate(imageData.date, date))
  )(state.images.imagesData)
}

@connect((state, ownProps) => ({
  image: getItemByDate(state, ownProps.date)
}),
{
  fetchImage
}
)
class CardImage extends React.Component {
  componentDidMount() {
    if (!this.props.image[0]) {
      const dateObj = date.parse(this.props.date, 'YYYY/MM/DD')
      const year = date.format(dateObj, 'YYYY')
      const month = date.format(dateObj, 'MM')
      const day = date.format(dateObj, 'DD')
      this.props.fetchImage(year, month, day)
    }
  }

  render () {
    const image = this.props.image[0]
    if(image){
      return (
        <Card style={{margin: '50px 0'}}>
          {console.log(this.props)}
          <CardMedia
            overlay={<CardTitle title={ `By ${image.copyright}` } />}
          >
            <img src={ image.hdurl } alt={ image.title } style={{width: '100%', height: 'auto'}}/>
          </CardMedia>
          <CardTitle title={ image.title } subtitle={ `Date: ${ image.date }`}/>
          <CardText>
            { image.explanation }
          </CardText>
        </Card>
      )
    } else {
      return null
    }
  }
}

export default CardImage

