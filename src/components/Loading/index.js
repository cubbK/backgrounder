import React from 'react'
import styles from './styles.module.styl'
import CircularProgress from 'material-ui/CircularProgress'

const Loading = () => {
  return (
    <div className={styles.container}>
      <CircularProgress size={60} thickness={7} />
    </div>
  )
}

export default Loading
