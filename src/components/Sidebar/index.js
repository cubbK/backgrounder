import React from 'react'
import ArrowUp from 'react-icons/lib/md/arrow-upward'
import 'normalize.css'
import styles from './styles.module.styl'

function Sidebar (props) {
  return (
    <div className={styles.sidebar}>
      <div href='' className={styles.arrowUp} onClick={props.goToTop}>
        <ArrowUp />
      </div>
      123
    </div>
  )
}

export default Sidebar
