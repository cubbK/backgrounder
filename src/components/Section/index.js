import React from 'react'
import styles from './styles.module.styl'

function Section (props) {
  return (
    <section className={styles.section}>
      <img src={props.url} alt='Awesome pic' />
    </section>
  )
}

export default Section
