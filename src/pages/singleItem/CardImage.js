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

function getItemByDate(state, date) {
  const isTheSameDate = (date1, date2) => date1 === date2
  return compose(
    flatten,
    filter(imageData => isTheSameDate(imageData.date, date))
  )(state.images.imagesData)
}

@connect((state, ownProps) => ({
  image: getItemByDate(state, ownProps.date)
}))
class CardImage extends React.Component {
  render () {
    const image = this.props.image[0]
    return (
      <Card style={{margin: '50px 0'}}>
        {console.log(this.props)}
        <CardMedia
          overlay={<CardTitle title={ image.title } subtitle={ `Date: ${ image.date }` } />}
        >
          <img src={ image.hdurl } alt={ image.title } style={{width: '100%', height: 'auto'}}/>
        </CardMedia>
        <CardTitle title='Card title' subtitle='Card subtitle' />
        <CardText>
          { image.explanation }
        </CardText>
      </Card>
    )
  }
}

export default CardImage
