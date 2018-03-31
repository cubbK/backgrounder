import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import BackspaceIcon from 'material-ui/svg-icons/hardware/keyboard-backspace'
import { Link } from 'react-router-dom'
const style = {
  margin: '20px'
}

const back = () => window.history.back()

const BackspaceHeader = props =>
    <FloatingActionButton style={style} onClick={back}>
      <BackspaceIcon />
    </FloatingActionButton>

export default BackspaceHeader
