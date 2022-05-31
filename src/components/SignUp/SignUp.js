import React, { useState } from "react";
import Profile from "../Profile/Profile";
// import Axios from "axios";
import Questionnaire from "../Questionnaire/Questionnaire";
const SignUp = () => {
  const [selected, setSelected] = useState("yes");
  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div className="container">
      <div className="sidenav">
        <div className="Profile">
          <div className="upper-container-profile">
            {/* <div className="image-container-profile">
              <img src="/images/img1.jpg" alt="" />
            </div> */}
          </div>
          <form onSubmit={handleSubmit}>
            <section>
              <input type="file" id="image" name="image" required></input>
              <label htmlFor="first_name"> First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <label> Birthday</label>
              <div className="multiple-input-container">
                <input
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="DD"
                  required={true}
                  value={""}
                  onChange={handleChange}
                />
                <input
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="MM"
                  required={true}
                  value={""}
                  onChange={handleChange}
                />
                <input
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="YYYY"
                  required={true}
                  value={""}
                  onChange={handleChange}
                />
              </div>

              <label> Gender</label>
              <div className="multiple-input-container">
                <input
                  id="man-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="men"
                  onChange={handleChange}
                  checked={selected === "men"}
                />
                <label htmlFor="man-gender-identity"> Man</label>

                <input
                  id="woman-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="women"
                  onChange={handleChange}
                  checked={selected === "women"}
                />
                <label htmlFor="woman-gender-identity"> Woman</label>

                <input
                  id="more-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="other"
                  onChange={handleChange}
                  checked={selected === "other"}
                />
                <label htmlFor="more-gender-identity">Other</label>

                {/*........ ...........................What I wanna see ...............................*/}
              </div>
              <label htmlFor="show-gender"> Show gender on my profile</label>
              <input
                id="show-gender"
                type="checkbox"
                name="show-gender"
                onChange={handleChange}
                checked={false}
              />
              <label>Show me</label>
              <div className="multiple-input-container">
                <input
                  id="man-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="man"
                  onChange={handleChange}
                  checked={selected === "man"}
                />
                <label htmlFor="man-gender-interest"> Man</label>
                <input
                  id="woman-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="woman"
                  onChange={handleChange}
                  checked={selected === "woman"}
                />
                <label htmlFor="woman-gender-interest"> woman</label>
                <input
                  id="everyone-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="everyone"
                  onChange={handleChange}
                  checked={selected === "everyone"}
                />
                <label htmlFor="more-gender-interest"> everyone</label>
              </div>

              <label htmlFor="about"> About me</label>
              <input
                id="about"
                type="text"
                name="about"
                placeholder="I like sports..."
                value={""}
                onChange={handleChange}
              />
              <input type="submit" />
            </section>
          </form>
        </div>
      </div>
      <div className="HomeMain">
        <Questionnaire />
      </div>
    </div>
  );
};

export default SignUp;
