import React from 'react'
import styles from './styles.module.styl'
import ScrollableAnchor from 'react-scrollable-anchor'

function Section (props) {
  return (
    <ScrollableAnchor id={props.id}>
      <section className={styles.section}>
        <img src={props.image} alt='Awesome pic' />
      </section>
    </ScrollableAnchor>
  )
}

export default Section
