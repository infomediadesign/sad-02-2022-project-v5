import './ChatList.css'
import ChatDetails from '../ChatDetails/ChatDetails';

function ChatList(){
    return <div className='ChatListContainer'>
        <ChatDetails
            name="Harshini Jadav"
            message="Hello, Good Morning!"
            timestamp="1 minute ago"
            profilePic="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <ChatDetails
            name="Smruti Puranik"
            message="Hello, Good Morning!"
            timestamp="30 seconds ago"
            profilePic="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <ChatDetails
            name="Shubham Choudhary"
            message="What's up!"
            timestamp="10 minutes ago"
            profilePic="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <ChatDetails
            name="Pranav Jaya Nayak"
            message="Hey, you there ??"
            timestamp="15 minutes ago"
            profilePic="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
    </div>

}

export default ChatList;