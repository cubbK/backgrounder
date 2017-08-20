import React from 'react'
import styles from './styles.module.styl'
import ScrollableAnchor from 'react-scrollable-anchor'

function Header (props) {
  return (
    <ScrollableAnchor id={'section-0'}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Scroll pics. One at a time
        </h1>
        <h2 className={styles.subtitle}>
          Subtitle
        </h2>
      </header>
    </ScrollableAnchor>
  )
}

export default Header
