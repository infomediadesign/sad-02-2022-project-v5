import React,{useEffect, useState} from 'react'
import './ChatDetails.css'
import {Avatar} from '@material-ui/core'
import { InsertEmoticonOutlined } from '@mui/icons-material';
import { useCookies } from "react-cookie";
import Axios from 'axios';


const ChatDetails = ({chatDetails}) => {
  const [cookies] = useCookies([]);
  const [typedText,setTypedText] = useState([]);

  const handleTypedText = async (e) =>{
    e.preventDefault();
    try{
      setTypedText(e.target.value);
      setTypedText("");
    }catch(err){
      console.log(err);
    }
  };

  const handleSendMessage = async (e) =>{
    e.preventDefault();
    try{
      if(chatDetails.senderid!=cookies.userid)
      {
          var sentMsgData = {
            myid: cookies.userid,
            profileid:chatDetails.senderid,
            text:chatDetails.message
          } 
          Axios.post('http://localhost:5000/api/sendmessage',{sentMsgData}).then((response)=>{
          console.log(response.data.messages);
     });
        }else{
          var sentMsgData = {
            myid: cookies.userid,
            profileid:chatDetails.receiverid,
            text:chatDetails.message
          } 
          Axios.post('http://localhost:5000/api/sendmessage',{sentMsgData}).then((response)=>{
          console.log(response.data);
        });
      }
    }catch(err){
      console.log(err);
    }
  };


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
      

       <div className='chatdetails_footer'>
        <InsertEmoticonOutlined/>
        <form>
        <input value={typedText}
          placeholder="Type a message" 
          onChange={handleTypedText}
          type="text"/>
           <button className='sendbutton' onClick={handleSendMessage}
            type="submit">Send</button>
           </form>
      </div> 
    </div>
  );
};


export default ChatDetails