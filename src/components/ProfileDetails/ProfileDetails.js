import "./ProfileDetails.css";
import React, { useState, useEffect } from "react";
import Sidenav from "../Sidenav/Sidenav";
import axios from "axios";
import Questionnaire from "../Questionnaire/Questionnaire";
const ProfileDetails = () => {

  const [userProfile, getUserProfile] = useState([]);
  var userId = {
    myid: "amadou@gmail.com"
  }

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = () => {
    axios
      .get('http://localhost:5000/api/getuserprofile',{params: userId})
      .then((response) => {
        // console.log(response);
        // debugger
        const profile = response.data;
        // console.log(profile);
        // console.log("data has been received.");
        getUserProfile(profile);
      })
      .catch(() => {
        console.log("no data has been received");
      });
  };

  

  return (
    <div className="container">
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="HomeMain">
        <Questionnaire userProfile = {userProfile}/>
      </div>
    </div>
  );
};

export default ProfileDetails;
