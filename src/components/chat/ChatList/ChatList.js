import React, { useState } from 'react'
import './ChatList.css'
import { SearchOutlined } from '@mui/icons-material';
import SidebarChatList from '../SidebarChatList/SidebarChatList';
import axios from 'axios';

const ChatList = () => {
    const[data,setData] = useState([]);
    var userList;
    var tempdata = [];
    var mydata = {
      myid:"pranav@gmail.com"
      
      }
      axios.get('http://localhost:5000/api/getmymessages/',{ params: mydata}).then((response)=>{
        console.log(response.data);
       if(response.data !== undefined){
        for(var i = 0; i< response.data.length; i++){
        if(response.data[i].members[0] !== mydata.myid){
          userList = {
               name:response.data[i].members[0]
          }
        }
        else{
          userList = {
               name:response.data[i].members[1]
          }
        }
        tempdata.push(userList);
      }
      setData(tempdata);
    }
      });

  return (
    <div className='chat_list'>
        <div className='chatlistbar_header'>
            <div className='Chatlist_searchbar'>
                <div className='chatlist_searchbarcontainer'>
                    <SearchOutlined/>
                    <input placeholder='Search or start new chat' type="text"/>
                </div>
            </div>
        </div>
        <div className='chatLists_Container'>
        { data.map((object, i) => <SidebarChatList UserName = {(object.name) }/>)}
        </div>
    </div>
  );
};

export default ChatList