import './Date.css';
import React,{useEffect} from "react";
import Sidenav from '../Sidenav/Sidenav';
import axios from "axios";
import CoffeeDateSuggestions from '../Date/DateSuggestions/DateSuggestions';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
const Date = () => {
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

  return (
    <div className="container">
        <div className="sidenav">
            <Sidenav/>
        </div>
        <div className="suggestion">
          <CoffeeDateSuggestions/>
        </div>
    </div>
  )
}

export default Date;