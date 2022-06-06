import "./ProfileDetails.css";
import React, { useState, useEffect } from "react";
import Sidenav from "../Sidenav/Sidenav";
import axios from "axios";
import Questionnaire from "../Questionnaire/Questionnaire";
const ProfileDetails = () => {


  

  return (
    <div className="container">
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="HomeMain">
        <Questionnaire/>
      </div>
    </div>
  );
};

export default ProfileDetails;
