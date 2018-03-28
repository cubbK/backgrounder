import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import BackspaceIcon from 'material-ui/svg-icons/hardware/keyboard-backspace'
import { Link } from 'react-router-dom'
const style = {
  margin: '20px'
}

const BackspaceHeader = props =>
  <Link to='/'>
    <FloatingActionButton style={style}>
      <BackspaceIcon />
    </FloatingActionButton>
  </Link>

export default BackspaceHeader
