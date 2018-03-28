import React from 'react'
import CardImage from './singleItem/CardImage'
import { connect } from 'react-redux'

const SingeItem = props =>
  <div>
    { console.log(props) }
    <CardImage />
  </div>

export default connect((state, ownProps) => ({
  ownProps: ownProps
}))(SingeItem)
