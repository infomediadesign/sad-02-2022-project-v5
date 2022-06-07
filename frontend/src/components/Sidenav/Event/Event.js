import React from 'react'
import Button from '@mui/material/Button';
import './Event.css';
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Event = () => {
  const [cookies] = useCookies([]);
  var myid = cookies.userid;
    const joinBlindDate = ()=>{
        axios.post('http://localhost:5000/api/getblinddate',{myid}).then((response)=>{
            toast( {response} , {
                    theme: "dark",
                  });
            console.log(response)
    });
    }
  return (
    <div className='sideNavContainer'>
        <div className="sideNavWelcomeText">
            Welcome To Events
        </div>
        <div className="sideNavEventsList">
            <div className="sideNavEvent">
                <div className='sideNavEventHeader'>
                    Coffee Date
                </div>
                <div className="sideNavEventFooter">
                    <div>
                        Take me to your favorite cafe
                    </div>
                    <div>
                        <Button className='sideNavEventJoinButton' size="medium">
                        Join Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="sideNavEventBlind">
                <div className='sideNavEventHeader'>
                    Blind Date
                </div>
                <div className="sideNavEventFooter">
                    <div>
                        Find a random match and see where it goes.
                    </div>
                    <div>
                        <Button onClick={joinBlindDate} className='sideNavEventJoinButton' size="medium">
                        Join Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    <ToastContainer/>
    </div>
  )
}

export default Event