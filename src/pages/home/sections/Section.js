import React from 'react'
import styles from './Section.module.styl'

const Section = props =>
  <section className={styles.section}>
    <img src={props.url} alt='Awesome pic' />
  </section>

export default Section
