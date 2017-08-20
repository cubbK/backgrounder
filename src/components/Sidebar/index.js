import React from 'react'
import ArrowUp from 'react-icons/lib/md/arrow-upward'
import 'normalize.css'
import styles from './styles.module.styl'

function Sidebar (props) {
  return (
    <div className={styles.sidebar}>
      <a href='' className={styles.arrowUp}>
        <ArrowUp />
      </a>
      123
    </div>
  )
}

export default Sidebar
