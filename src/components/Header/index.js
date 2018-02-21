import React, { Component } from 'react'
import styles from './styles.module.styl'
import Arrow from 'react-icons/lib/go/arrow-small-down'
import Scrollchor from 'react-scrollchor'

const easeOutQuad = (x, t, b, c, d) => {
  return -c * ((t=t/d-1)*t*t*t - 1) + b;
}
class Header extends Component {

  render () {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>
          Scroll the Universe
        </h1>
        <h2 className={styles.subtitle}>
          All of It
        </h2>
        <div className={styles.arrow}>
          <Scrollchor to="scroll" className="nav-link" animate={ {duration: 200, easing: easeOutQuad} }>
            <Arrow />
          </Scrollchor>
        </div>
      </header>
    )
  }
}

export default Header
