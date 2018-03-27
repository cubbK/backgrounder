import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './InfoBtn.module.styl'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

const InfoBtn = props =>

  <div className={styles.info}>
    <Animated
      animationIn='bounceInRight'
      animationOut='bounceInRight'
      isVisible style={{ animationDuration: '0.3s' }
      }
    >
      <Link to={`/photo/${props.id}`}>
        <RaisedButton label='Info' primary />
      </Link>
    </Animated>
  </div>

export default InfoBtn
