import "./ProfileDetails.css";
import React, { useState, useEffect } from "react";
import Sidenav from "../Sidenav/Sidenav";
import axios from "axios";
import Questionnaire from "../Questionnaire/Questionnaire";
const ProfileDetails = () => {

  const [userProfile, getUserProfile] = useState('');

  const getProfileData = () => {
    axios
      .get('http://localhost:5000/api/getuserprofile')
      .then((response) => {
        debugger
        console.log(response);
        const profile = response.data;
        console.log(profile);
        console.log("data has been received.");
        getUserProfile(profile);
      })
      .catch(() => {
        console.log("no data has been received");
      });
  };
  useEffect(() => {
    getProfileData();
  }, []);
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
