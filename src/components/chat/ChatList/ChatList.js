import React from 'react'
import './ChatList.css'
import { SearchOutlined } from '@mui/icons-material';
import SidebarChatList from '../SidebarChatList/SidebarChatList';

function ChatList() {
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
            <SidebarChatList/>
            <SidebarChatList/>
            <SidebarChatList/>

        </div>
    </div>
  );
}

export default ChatList