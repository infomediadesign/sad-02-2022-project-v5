import React,{useEffect, useState} from 'react'
import './ChatDetails.css'
import {Avatar, IconButton} from '@material-ui/core'
import { SearchOutlined } from '@mui/icons-material';
import { CallOutlined} from '@material-ui/icons';
import { InsertEmoticonOutlined } from '@material-ui/icons';
import axios from 'axios';

const ChatDetails = ({userName,senderMessage,receiverMessage}) => {

  return (
    <div className='chat_details'>
      <div className='chatdetails_header'>
        <Avatar />

         <div className='chatdetails_headerInfo'>
          <h3>{userName}</h3>
          <div className='chatheader_timestamp'>
          <p>Last seen at: </p>
          <span>{new Date().toUTCString()}</span>
          </div>
        </div>
        </div>

       <div className='chatdetails_body'>
        <p className='chatmessage'>{senderMessage}
        </p>

        <p className='chatmessage chat_received'>{receiverMessage}
        </p>
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