import React from 'react'
import Button from '@mui/material/Button';
import './Event.css';
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Event = () => {
const navigate = useNavigate();
  const [cookies] = useCookies([]);
  var myid = cookies.userid;
    const joinBlindDate = ()=>{
        console.log("here")
        axios.post('http://localhost:5000/api/getblinddate',{myid}).then((response)=>{
            toast( {response} , {
                    theme: "dark",
                  });
    });
    }
    const joinCoffeeDate = ()=>{
        console.log("here")
        axios.post('http://localhost:5000/api/joincoffeedate',{myid}).then((response)=>{
            toast( {response} , {
                    theme: "dark",
                  });
            navigate("/coffeedate");
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
                        <Button onClick={joinCoffeeDate} className='sideNavEventJoinButton' size="medium">
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