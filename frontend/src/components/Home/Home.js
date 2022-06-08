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
    console.log(cookies.userid)
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
        // else
        //   toast(`Hi ${data.user} 🦄`, {
        //     theme: "dark",
        //   });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    removeCookie("userid");
    navigate("/");
  };
  return (
    <div className="container">
<<<<<<< HEAD:src/components/home/home.js

        <button onClick={logOut}>Log out</button>

=======
        <button className="logout" onClick={logOut}>Log out</button>
>>>>>>> development:frontend/src/components/Home/Home.js
        <div className="sidenav">

            <Sidenav/>

        </div>
<<<<<<< HEAD:src/components/home/home.js

        {/* <div className="suggestion">

          <Suggestions

          Username="Shubham Choudhary"

           Age="25"

           Place="Mannheim, Germany"

           Location="35"

           About="Hey Baby Girl" />

        </div> */}

=======
        <div className="suggestion">
          <Suggestions 
       />
        </div>
>>>>>>> development:frontend/src/components/Home/Home.js
       

   



    </div>
  )
}

export default Home;