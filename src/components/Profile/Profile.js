import { useState } from "react";
import "./Profile.css";
const Profile = () => {
  // const[name, setName] = useState('Pranav')
  // const[job, setJob] = useState('Software Developer')
  // const[about, setABout] = useState('I will add other data depending on the registration form')
  const [selected, setSelected] = useState("yes");
  const handleSubmit = () => {
    console.log("submitted");
  };

  // const handleChange = () => {
  //   console.log("submitted");
  // };
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
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
         
          <input type="file" id="image" name="image" ></input>
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
              value="man"
              onChange={handleChange}
              checked={selected === "man"}
            />
            <label htmlFor="man-gender-identity"> Man</label>

            <input
              id="woman-gender-identity"
              type="radio"
              name="gender_identity"
              value="woman"
              onChange={handleChange}
              checked={selected === "woman"}
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
              name=""
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

        {/* <section>
        <label htmlFor="about">Profile Photo</label>
        <input type="url" name="url" onChange={handleChange} required={true} />
        <div className="photo-container"></div>
        </section> */}
      </form>
    </div>
  );
};

export default Profile;
