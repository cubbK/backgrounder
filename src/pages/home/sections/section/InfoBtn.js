import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './InfoBtn.module.styl'
import { Link } from 'react-router-dom'

const InfoBtn = props =>
  <div className={styles.info}>
    <Link to={`/photo/${props.id}`}>
      <RaisedButton label='Info' primary />
    </Link>
  </div>

export default InfoBtn
