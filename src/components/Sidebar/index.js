import React from 'react'
import ArrowUp from 'react-icons/lib/md/arrow-upward'
import 'normalize.css'
import styles from './styles.module.styl'

function Sidebar (props) {
  return (
    <header className={styles.sidebar}>
      <a href='' className={styles.arrowUp}>
        <ArrowUp />
      </a>
      123
    </header>
  )
}

export default Sidebar
