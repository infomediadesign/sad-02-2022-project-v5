import React from 'react'
import './SidebarChatList.css'
import {Avatar} from '@material-ui/core'


const SidebarChatList = ({UserName}) => {

  return (
    <div className='sidebarchat_container'>
        <Avatar/>
        <div className='sidebarchat_info'>
          <h3>{UserName}</h3>  
        </div>
    </div>
  )
}

export default SidebarChatList