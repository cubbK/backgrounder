import React from 'react'
import CardImage from './singleItem/CardImage'
import styles from './SingleItem.module.styl'

const SingeItem = props =>
  <div className={styles.container} >
    <CardImage date={props.match.params.date} />
  </div>

export default SingeItem
