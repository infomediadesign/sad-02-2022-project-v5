import React,{useState} from 'react'
import './ChatDetails.css'
import {Avatar, IconButton} from '@material-ui/core'
import { SearchOutlined } from '@mui/icons-material';
import { CallOutlined} from '@material-ui/icons';
import { InsertEmoticonOutlined } from '@material-ui/icons';
import axios from 'axios';
import ChatList from '../ChatList/ChatList';
import SidebarChatList from '../SidebarChatList/SidebarChatList';

const ChatDetails = () => {
  const [data,setData] = useState([]);
  const [UserName,setUserName] = useState("");
  const [input,setInput] = useState("");
  var receivedMessages;
  var sentMessages;
  var tempMessages = [];
  var mydata = {
      myid:"pranav@gmail.com",
  } 

    axios.get('http://localhost:5000/api/getmymessages/',{ params: data}).then((response)=>{
       console.log(response.data);
       if(response.data !== undefined)
       {
         for(var i=0;i<response.data.length;i++){
          if(response.data[i].members[i] === mydata.myid){
            receivedMessages = {
            rmessage:response.data[i].messages[i].text
          }
         }
         else
         {
          sentMessages = {
            smessage:response.data[i].messages[i].text
          }
         }
         tempMessages.push(receivedMessages,sentMessages);
         }
         setData(tempMessages);
       } 

      //  const handleUserName = () => {
      //    setUserName(e.target.value);
      //  }

      //  const sendMessage = (e) => {
      //     e.preventDefault();
      //     console.log(response,input);
      //  }
      });

  return (
    <div className='chat_details'>
      <div className='chatdetails_header'>
        <Avatar />

        <div className='chatdetails_headerInfo'>
        { data.map((object, i) => <SidebarChatList UserName = {(object.name) }/>)}
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
        <p className='chatmessage'>{receivedMessages}
        </p>

        <p className='chatmessage chat_received'>{sentMessages}
        </p>
        </div>

      <div className='chatdetails_footer'>
        <InsertEmoticonOutlined/>
        <form>
        <input 
          placeholder="Type a message" onChange={(e) => setInput(e.target.value)}
          type="text"/>
           <button className='sendbutton' value={sentMessages}
            type="submit">Send</button>
           </form>
      </div>
    </div>
  );
};


export default ChatDetails