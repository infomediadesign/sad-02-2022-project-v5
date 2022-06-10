import React,{useEffect, useState} from 'react'
import './ChatDetails.css'
import { Avatar } from '@mui/material';
import { Cookies } from 'react-cookie'
import { useCookies } from "react-cookie";
import { Cookie } from '@mui/icons-material'

const ChatDetails = ({chatDetails}) => {
  const [cookies] = useCookies([]);
  return (
    <div className='chat_details'>
      <div className='chatdetails_header'>
        <Avatar />

         <div className='chatdetails_headerInfo'>
          <h3>{chatDetails.name}</h3>
          <div className='chatheader_timestamp'>
          <p>Last seen at: </p>
          <span>{new Date().toUTCString()}</span>
          </div>                                                                          
        </div>
        </div>
         <div className='chatdetails_body'>
        { chatDetails.message?.map((object, i) =>
        object.senderid!==cookies.userid?
         <p className='chatmessage chat_received'>{object.text}
         </p>:
         <p className='chatmessage'>{object.text}
         </p>
        )}
         </div>
      

      {/* <div className='chatdetails_footer'>
        <InsertEmoticonOutlined/>
        <form>
        <input value={input}
          placeholder="Type a message" 
          onChange={(e) => setInput(e.target.value)}
          type="text"/>
           <button className='sendbutton' onClick={sendMessage}
            type="submit">Send</button>
           </form>
      </div>  */}
    </div>
  );
};


export default ChatDetails