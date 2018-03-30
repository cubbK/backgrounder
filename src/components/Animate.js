import {Animated} from 'react-animated-css'
import React from 'react'

const Animate = ({ animationIn = 'bounce', animationOut, duration = 2, children }) => 
  <Animated 
    animationIn={ animationIn } 
    animationOut={ animationOut ? animationOut : animationIn } 
    isVisible={true}
    style={{ animationDuration: `${ duration }s` }}
  >
    { children }
  </Animated>
  
export default Animate

