import React from 'react'
import './Chat.css'
import ChatList from './ChatList/ChatList'
import ChatDetails from './ChatDetails/ChatDetails'

function Chat (){
  return (
    <div className='chatListContainer'>

      <ChatList/>
      <ChatDetails/>
      </div>
  )
}

export default Chat;