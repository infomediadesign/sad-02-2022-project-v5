import './Home.css';
import React,{useState,useEffect} from "react";
import Sidenav from '../Sidenav/Sidenav';
import axios from "axios";
import Suggestions from '../Suggestions/Suggestions';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
const Home = () => {
    const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/signin");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/signin");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/signin");
  };
  return (
    <div className="container">
        <button onClick={logOut}>Log out</button>
        <div className="sidenav">
            <Sidenav/>
        </div>
        <div className="suggestion">
          <Suggestions 
          Username="Shubham Choudhary"
           Age="25" 
           Place="Mannheim, Germany"
           Location="35" 
           About="Hey Baby Girl" />
        </div>
       
    

    </div>
  )
}

export default Home;