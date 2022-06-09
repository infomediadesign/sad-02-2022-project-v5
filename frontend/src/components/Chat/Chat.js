import './Chat.css'
import ChatDetails from './ChatDetails/ChatDetails'
import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Chat (){
  const[data,setData] = useState([]);
  const navigate = useNavigate();
const [cookies,  removeCookie] = useCookies([]);
  const[chatData,setChatData] = useState([]);
  var userInfo;
  var tempdata = [];
  var mydata = {
    myid:cookies.userid
    
    }
  
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
          console.log("jwt does not exist")
        navigate("/signin");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {cookies},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          removeCookie("userid");
          navigate("/signin");
        } 
      }
    };
    verifyUser();
    axios.get('http://localhost:5000/api/getmymessages/',{ params: mydata}).then((response)=>{
      console.log(response.data)
      debugger;
      if(response.data != undefined){
        for(var i = 0; i< response.data.length; i++){
        if(response.data[i].members[0] !== mydata.myid){
          userInfo = {
               name:response.data[i].members[0],
               message:response.data[i].messages,
          }
        }
        else{
          userInfo = {
               name:response.data[i].members[1],
               message:response.data[i].messages,
          }
        }
        var found = tempdata.some(el => el.name === userInfo.name);
        if (!found) 
        tempdata.push(userInfo);
        }
      }
      setData(tempdata);
      console.log(tempdata)
    });
  }, [cookies, navigate, removeCookie]);

  
    const getChatDetails= (data) =>{
      console.log(data)
      setChatData(data);
    }
   return (
    <div className='chatContainer'>
      <div className='chatcontainer_body'>
      <div className='chat_list'>
    { data.map((object, i) => <div key={i} onClick={()=>getChatDetails(object)} className='sidebarchat_container'>
      <div className='sidebarchat_container'>
        <div className='sidebarchat_info'>
          <h3>{object.name}</h3>  
        </div>
        </div>
    </div>)}
     
    </div>
    
    <ChatDetails chatDetails={chatData} />
    </div> 

       </div>
  )
}

export default Chat;