import React from 'react'
import './ChatDetails.css'
import {Avatar, IconButton} from '@material-ui/core'
import { SearchOutlined } from '@mui/icons-material';
import { CallOutlined, Mic} from '@material-ui/icons';
import { InsertEmoticonOutlined } from '@material-ui/icons';

function ChatDetails() {
  return (
    <div className='chat_details'>
      <div className='chatdetails_header'>
        <Avatar />

        <div className='chatdetails_headerInfo'>
          <h3>Harshini Jadav</h3>
          <div className='chatheader_timestamp'>
          <p>Last seen at: </p>
          <span>{new Date().toUTCString()}</span>
          </div>
        </div>
        
        <div className='chatdetails_headeronright'>
        <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <CallOutlined/>
          </IconButton>
        </div>
      </div>

      <div className='chatdetails_body'>
      <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        <p className='chatmessage'>
             Hello, good morning!
        </p>

        <p className='chatmessage chat_received'>Hi, morning!
        <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
        </div>

      <div className='chatdetails_footer'>
        <InsertEmoticonOutlined/>
        <form>
          <input 
          placeholder="Type a message"
          type="text"/>
         <button 
         type="submit">
           Send
           </button>
           </form>
           <Mic/>
      </div>
    </div>
  );
}

export default ChatDetails