import React from 'react'
import './Chat.css'
import ChatList from './ChatList/ChatList'
import ChatDetails from './ChatDetails/ChatDetails'

function Chat (){
   return (
    <div className='chatContainer'>
      <div className='chatcontainer_body'>
      <ChatList/>
      <ChatDetails/>
      </div>
      </div>
  )
}

export default Chat;