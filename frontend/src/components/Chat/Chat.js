import './Chat.css'
import { Avatar } from '@material-ui/core'
import { InsertEmoticonOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Chat() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [chatData, setChatData] = useState([]);
  const [typedText, setTypedText] = useState("");

  var userInfo;
  var tempdata = [];
  var mydata = {
    myid: cookies.userid

  }

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        console.log("jwt does not exist")
        navigate("/signin");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          { cookies },
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
    axios.get('http://localhost:5000/api/getmymessages/', { params: mydata }).then((response) => {
      if (response.data != undefined) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].members[0] !== mydata.myid) {
            userInfo = {
              name: response.data[i].members[0],
              message: response.data[i].messages,
            }
          }
          else {
            userInfo = {
              name: response.data[i].members[1],
              message: response.data[i].messages,
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


  const handleTypedText = async (e) => {
    e.preventDefault();
    try {
      setTypedText(e.target.value)
    } catch (err) {
      console.log(err);
    }
  };
  const getChatDetails = (data) => {
    console.log(data)
    setChatData(data);
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();
    var sentMsgData = {
      myid: cookies.userid,
      profileid: chatData.name,
      text: typedText
    }
    try {
      await axios.post('http://localhost:5000/api/sendmessage', { sentMsgData }).then((response) => {
        setTypedText("");
      });
      
    await axios.get('http://localhost:5000/api/getmymessages/', { params: mydata }).then((response) => {
      if (response.data != undefined) {
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].members[0] !== mydata.myid) {
            userInfo = {
              name: response.data[i].members[0],
              message: response.data[i].messages,
            }
          }
          else {
            userInfo = {
              name: response.data[i].members[1],
              message: response.data[i].messages,
            }
          }
          debugger
          if(userInfo.name===chatData.name){
            getChatDetails(userInfo)
          }
          var found = tempdata.some(el => el.name === userInfo.name);
          if (!found)
            tempdata.push(userInfo);
        }
      }
      setData(tempdata);
    });
    }
    catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='chatContainer'>
      <div className='chatcontainer_body'>
        <div className='chat_list'>
          {data.map((object, i) => <div key={i} onClick={() => getChatDetails(object)} className='sidebarchat_container'>
            <div className='sidebarchat_innercontainer'>
              <div className='sidebarchat_info'>
                <h3>{object.name}</h3>
              </div>
            </div>
          </div>)}

        </div>
        <div className='chat_details'>
          <div className='chatdetails_header'>
            <Avatar />

            <div className='chatdetails_headerInfo'>
              <h3>{chatData.name}</h3>
              <div className='chatheader_timestamp'>
                <p>Last seen at: </p>
                <span>{new Date().toUTCString()}</span>
              </div>
            </div>
          </div>
          <div className='chatdetails_body'>
            {chatData.message?.map((object, i) =>
              object.senderid === cookies.userid ?
                <p className='chatmessage chat_received'>{object.text}
                </p> :
                <p className='chatmessage'>{object.text}
                </p>
            )}
          </div>


          <div className='chatdetails_footer'>
            <InsertEmoticonOutlined />
            <form>
              <input value={typedText}
                placeholder="Type a message"
                onChange={handleTypedText}
                type="text" />
              <button className='sendbutton' onClick={handleSendMessage}
                type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Chat;