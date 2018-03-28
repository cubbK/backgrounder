import React from 'react'
import CardImage from './singleItem/CardImage'
import BackspaceHeader from 'components/BackspaceHeader'
import styles from './SingleItem.module.styl'

const SingeItem = props =>
  <div >
    <BackspaceHeader />
    <div className={styles.container}>
      <CardImage date={props.match.params.date} />
    </div>
  </div>

export default SingeItem
