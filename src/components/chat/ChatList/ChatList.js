import { HouseSharp } from '@mui/icons-material';
import { IconButton } from 'material-ui';
import React from 'react'
import './ChatList.css'

function ChatList() {
  return (
    <div className='chat_list'>
        <div className='chatlistbar_header'>
            <div className='chatlistbar_icons'>
                <IconButton>
                    <HouseSharp></HouseSharp>
                </IconButton>
            </div>
        </div>
    </div>
  );
}

export default ChatList