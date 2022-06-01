import React from "react"
import Avatar from "material-ui/Avatar";

function ChatDetails({name,message,timestamp,profilePic}){
    return<div className="ChatDetailsContainer">
        <Avatar className="person_img" alt={name} src={profilePic}/>
        <div>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <div>
            <p>{timestamp}</p>
        </div>
    </div>
    
}

export default ChatDetails;
