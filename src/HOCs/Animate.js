// @flow
import {Animated} from 'react-animated-css'
import React from 'react'

const animate = (props : {
  animationIn: string,
  animationOut: ?string,
  animationDuration: ?number
} ) => wrappedComponent =>
  <Animated 
    animationIn={props.animationIn} 
    animationOut={props.animationOut ? props.animationOut: props.animationIn} 
    style={{ animationDuration: `${props.animationDuration}s` }}
    isVisible
  >
    { wrappedComponent }
  </Animated>

export default animate
