import React from 'react'
import './SidebarChatList.css'
import {Avatar} from '@material-ui/core'

function SidebarChatList() {
  return (
    <div className='sidebarchat_container'>
        <Avatar/>
        <div className='sidebarchat_info'>
            <h2>Harshini Jadav</h2>
            <p>Hello !!</p>
        </div>
    </div>
  )
}

export default SidebarChatList