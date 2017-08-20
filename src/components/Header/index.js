import React from 'react'
import styles from './styles.module.styl'

function Header (props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Title
      </h1>
      <h2 className={styles.subtitle}>
        Subtitle
      </h2>
    </header>
  )
}

export default Header