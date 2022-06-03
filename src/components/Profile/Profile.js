// import { width } from "@mui/system";
import React, { useState} from "react";
import "./Profile.css";
import Slider from "@mui/material/Slider";
import axios from "axios";
// import React from "react";

const Profile = () => {

  // const {userProfile} = props;
  

  const [location, setLocation] = useState([]);
  const [file, setFile] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDobDate] = useState("");
  const [month, setDobMonth] = useState("");
  const [year, setDobYear] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [PreferredGender, setPreferredgender] = useState("");
  const [distance, setDistance] = useState();
  const [fileName, setFileName] = useState("");
  const [about, setAbout] = useState("");

  // var options = {
  //   enableHighAccuracy: true,

  //   timeout: 5000,

  //   maximumAge: 0,
  // };
  // function success(pos) {
  //   var crd = pos.coords;
  //   var tempLocation = [];
  //   tempLocation.push(Number(crd.longitude));
  //   tempLocation.push(Number(crd.latitude));
  //   setLocation(tempLocation);
  // }
  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // navigator.geolocation.getCurrentPosition(success, error, options);

  const handleSubmit = () => {
    console.log("submitted");
  };
  

  const handleDistance = (event, value) => {
    setDistance(value);
  };

  const handleDOBDate = (e) => {
    setDobDate(e.target.value);
  };

  const handleDOBMonth = (e) => {
    setDobMonth(e.target.value);
  };

  const handleDOBYear = (e) => {
    setDobYear(e.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handlePreferredGender = (e) => {
    setPreferredgender(e.target.value);
  };
  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleAbout = (event) => {
    setAbout(event.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="Profile">
      <div className="upper-container-profile">
        <div className="image-container-profile">
          <img src="/images/img1.jpg" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Choose picture</label>
          <input
            className="fileInput"
            type="file"
            name="image"
            onChange={handleFile}
            required
          ></input>
          <label htmlFor="first_name"> FullName</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="First Name"
            required={true}
            value={fullName}
            onChange={handleFullName}
          />
          <label> Birthday</label>
          <div className="multiple-input-container">
            <input
              id="dob_day"
              type="number"
              name="dob_day"
              placeholder="DD"
              required={true}
              value={date}
              onChange={handleDOBDate}
            />
            <input
              id="dob_month"
              type="number"
              name="dob_month"
              placeholder="MM"
              required={true}
              value={month}
              onChange={handleDOBMonth}
            />
            <input
              id="dob_year"
              type="number"
              name="dob_year"
              placeholder="YYYY"
              required={true}
              value={year}
              onChange={handleDOBYear}
            />
          </div>
          <label> Gender</label>
          <div className="multiple-input-container">
            <input
              id="man-gender-identity"
              type="radio"
              name="gender_identity"
              value="men"
              onChange={handleGenderChange}
              checked={selectedGender === "men"}
            />
            <label htmlFor="man-gender-identity"> Man</label>

            <input
              id="woman-gender-identity"
              type="radio"
              name="gender_identity"
              value="women"
              onChange={handleGenderChange}
              checked={selectedGender === "women"}
            />
            <label htmlFor="woman-gender-identity"> Woman</label>

            <input
              id="more-gender-identity"
              type="radio"
              name="gender_identity"
              value="other"
              onChange={handleGenderChange}
              checked={selectedGender === "other"}
            />
            <label htmlFor="more-gender-identity">Other</label>
          </div>

          {/*........ ...........................What I wanna see ...............................*/}

          <label>Show within distance</label>
          <Slider
            defaultValue={1}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleDistance}
            value={distance}
          />
          <label>Show me</label>
          <div className="multiple-input-container">
            <input
              id="man-gender-interest"
              type="radio"
              name="gender_interest"
              value="man"
              onChange={handlePreferredGender}
            />

            <label htmlFor="man-gender-interest"> Man</label>
            <input
              id="woman-gender-interest"
              type="radio"
              name="gender_interest"
              value="woman"
              onChange={handlePreferredGender}
            />
            <label htmlFor="woman-gender-interest"> woman</label>
            <input
              id="everyone-gender-interest"
              type="radio"
              name="gender_interest"
              value="woman"
              onChange={handlePreferredGender}
            />
            <label htmlFor="everyone-gender-interest"> everyone</label>
          </div>

          <label htmlFor="about"> About me</label>
          <input
            id="about"
            type="text"
            name="about"
            placeholder="I like sports..."
            value={about}
            onChange={handleAbout}
          />
          <input type="submit" />
        </section>
      </form>
    </div>
  );
};

export default Profile;
