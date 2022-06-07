import './Chat.css'
import ChatDetails from './ChatDetails/ChatDetails'
import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@mui/icons-material';
import SidebarChatList from './SidebarChatList/SidebarChatList';
import axios from 'axios';

function Chat (){
  const[data,setData] = useState([]);
  const[chatData,setChatData] = useState([]);
  var userInfo;
  var tempdata = [];
  var mydata = {
    myid:"pranav@gmail.com"
    
    }
    useEffect(() =>{
      axios.get('http://localhost:5000/api/getmymessages/',{ params: mydata}).then((response)=>{
        console.log(response.data);
       if(response.data !== undefined){
        for(var i = 0; i< response.data.length; i++){
        if(response.data[i].members[0] !== mydata.myid){
          if(response.data[i].members[i].receiverid !== mydata.myid)
          userInfo = {
               name:response.data[i].members[0],
               smessage:response.data[i].messages[i].text,
          }
        }
        else{
          if(response.data[i].members[i].senderid !== mydata.myid)
          userInfo = {
               name:response.data[i].members[1],
               rmessage:response.data[i].messages[i].text,
               
          }
        }
        tempdata.push(userInfo);
      }
      setData(tempdata);
    }
      });
    },[])

  
    const getChatDetails= (data) =>{
      debugger
      setChatData(data);
    }
    console.log(chatData);
   return (
    <div className='chatContainer'>
      <div className='chatcontainer_body'>
      <div className='chat_list'>
    {/* <div className='chatlistbar_header'>
        <div className='Chatlist_searchbar'>
            <div className='chatlist_searchbarcontainer'>
                <SearchOutlined/>
                <input placeholder='Search or start new chat' type="text"/>
            </div>
        </div>
    </div> */}
    <div className='chatLists_Container'>
    { data.map((object, i) => <ChatDetails userName = {(object.name)} senderMessage = {(object.smessage)} receiverMessage ={(object.rmessage)} />)} 
    { data.map((object, i) => <div onClick={()=>getChatDetails(object)} className='sidebarchat_container'>
        <div className='sidebarchat_info'>
          <h3>{object.name}</h3>  
        </div>
    </div>)}
     
    </div>
</div> 

       </div>
      </div>
  )
}

export default Chat;