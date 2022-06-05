import React,{useEffect,useState} from 'react'
import './ChatDetails.css'
import {Avatar, IconButton} from '@material-ui/core'
import { SearchOutlined } from '@mui/icons-material';
import { CallOutlined, Mic} from '@material-ui/icons';
import { InsertEmoticonOutlined } from '@material-ui/icons';
import axios from 'axios';
import ChatList from '../ChatList/ChatList';

function ChatDetails() {
  const[getMessages,setMessages] = useState([]);
  var senderdata = {
    myid:"harshini@gmail.com",
  }

   

  

  useEffect(()=>{
    axios.get('http://localhost:5000/api/getmymessages/',{ params: senderdata}).then((response)=>{
       getMessages = response.data.data;
       setMessages(response.data.data);

      });
  }, []);

  return (
    <div className='chat_details'>
      <div className='chatdetails_header'>
        <Avatar />

        <div className='chatdetails_headerInfo'>
          <h3>{data.name}</h3>
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
        <p className='chatmessage'>
             {data.text.map((object) => <p Tagname={object} />)}
        </p>

        <p className='chatmessage chat_received'>Hi, morning!
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