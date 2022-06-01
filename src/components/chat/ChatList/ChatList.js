import './ChatList.css'
import ChatDetails from '../ChatDetails/ChatDetails';

function ChatList(){
    return <div className='ChatListContainer'>
        <ChatDetails
            name="Harshini"
            message="Hello, Good Morning!"
            timestamp="1 minute ago"
        />
    </div>

}

export default ChatList;