import { Avatar } from 'material-ui'
import React from 'react'
import './SidebarChatList.css'

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