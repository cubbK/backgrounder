import React from 'react'
import styles from './styles.module.styl'
import Arrow from 'react-icons/lib/go/arrow-small-down'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Scroll the Universe
      </h1>
      <h2 className={styles.subtitle}>
        All of it
      </h2>
      <div className={styles.arrow}>
        <Arrow />
      </div>
    </header>
  )
}

export default Header
