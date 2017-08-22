import React from 'react'
import { goToTop } from 'react-scrollable-anchor'
import Sidebar from '../components/Sidebar'

function SidebarContainer (props) {
  return (
    <Sidebar goToTop={goToTop} />
  )
}

export default SidebarContainer
