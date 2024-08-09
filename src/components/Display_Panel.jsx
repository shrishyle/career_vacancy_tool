import React from 'react'
import Display_List from './Display_List'

const Display_Panel = () => {
  return (
    <div className='display_panel'>
        <Display_List list_type="Regulator Body"></Display_List>
        <Display_List list_type="Central PSU"></Display_List>
        <Display_List list_type="State PSU"></Display_List>
        <Display_List list_type="Autonomous Body"></Display_List>
    </div>
  )
}

export default Display_Panel