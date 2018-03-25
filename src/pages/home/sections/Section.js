import React from 'react'
import styles from './Section.module.styl'
import InfoBtn from './section/InfoBtn'

const Section = props =>
  <section className={styles.section} onMouseEnter={props.onMouseEnter}>
    <img src={props.url} alt='Awesome pic' />
    {
      props.toShowInfoButton ? <InfoBtn id={props.id} /> : null
    }
  </section>

export default Section
