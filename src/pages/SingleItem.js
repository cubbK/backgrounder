import React from 'react'
import CardImage from './singleItem/CardImage'
import BackspaceHeader from 'components/BackspaceHeader'
import styles from './SingleItem.module.styl'
import Animate from 'components/Animate'

const SingeItem = props =>
  <div>
    <BackspaceHeader />
    <div className={styles.container}>
      <Animate animationIn='zoomIn' animationOut='zoomOut' duration={0.5}>
        <CardImage date={props.match.params.date} />
      </Animate>
    </div>
  </div>

export default SingeItem
