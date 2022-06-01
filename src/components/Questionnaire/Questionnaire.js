// import Nav from '../components/Nav'
import { useState } from "react";
// import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import "./Questionnaire.css";

const Questionnaire = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(null)
  // const [formData, setFormData] = useState({
  //     user_id: cookies.UserId,
  //     first_name: "",
  //     dob_day: "",
  //     dob_month: "",
  //     dob_year: "",
  //     show_gender: false,
  //     gender_identity: "man",
  //     gender_interest: "woman",
  //     url: "",
  //     about: "",
  //     matches: []

  // })

  // let navigate = useNavigate()

  const [selected, setSelected] = useState("yes");
  const handleSubmit = () => {
    console.log("submitted");

    // const handleSubmit =  () => {
    //     console.log('submitted')
    // e.preventDefault()
    // try {
    //     const response = await axios.put('http://localhost:8000/user', {formData})
    //     console.log(response)
    //     const success = response.status === 200
    //     if (success) navigate('/dashboard')
    // } catch (err) {
    //     console.log(err)
    // }
  };

  // const handleChange = (e) => {
  //     console.log('e', e)
  //     const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
  //     const name = e.target.name

  //     setFormData((prevState) => ({
  //         ...prevState,
  //         [name]: value
  //     }))
  // }
  const handleChange = (event) => {
    setSelected(event.target.value);
    // const handleChange = () => {
    // console.log("submitted");
  };

  return (
    <>
      {/* <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            /> */}

      <div className="Questionnaire">
        <h2>ADD MORE DETAILS</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label>Passions</label>
            <div className="multiple-input-container">
              <input
                id="passion-hiphop"
                type="radio"
                name="passion"
                value="hiphop"
                onChange={handleChange}
                checked={selected === "hiphop"}
              />
              <label htmlFor="passion-hiphop">Hip Hop</label>
              <input
                id="passion-basketball"
                type="radio"
                name="passion"
                value="basketball"
                onChange={handleChange}
                checked={selected === "basketball"}
              />
              <label htmlFor="passion-basketball">Basketball</label>
              <input
                id="passion-theater"
                type="radio"
                name="passion"
                value="theater"
                onChange={handleChange}
                checked={selected === "theater"}
              />
              <label htmlFor="passion-theater">Theater</label>
              <br />
            </div>
            <div className="multiple-input-container">
              <input
                id="passion-meditation"
                type="radio"
                name="passion"
                value="meditation"
                onChange={handleChange}
                checked={selected === "meditation"}
              />
              <label htmlFor="passion-meditation">Meditation</label>
              <input
                id="passion-yoga"
                type="radio"
                name="passion"
                value="yoga"
                onChange={handleChange}
                checked={selected === "yoga"}
              />
              <label htmlFor="passion-yoga">Yoga</label>
              <input
                id="passion-reading"
                type="radio"
                name="passion"
                value="reading"
                onChange={handleChange}
                checked={selected === "reading"}
              />
              <label htmlFor="woman-gender-identity">Reading</label>
            </div>
            <div className="multiple-input-container">
              <input
                id="passion-running"
                type="radio"
                name="passion"
                value="running"
                onChange={handleChange}
                checked={selected === "running"}
              />
              <label htmlFor="man-gender-identity">Running</label>
              <input
                id="passion-photography"
                type="radio"
                name="passion"
                value="photography"
                onChange={handleChange}
                checked={selected === "photography"}
              />
              <label htmlFor="passion-photography">Photography</label>
              <input
                id="passion-makup"
                type="radio"
                name="passion"
                value="makeup"
                onChange={handleChange}
                checked={selected === "makup"}
              />
              <label htmlFor="woman-gender-identity">Makeup</label>
            </div>
            <div className="multiple-input-container">
              <input
                id="passion-gym"
                type="radio"
                name="passion"
                value="gym"
                onChange={handleChange}
                checked={selected === "gym"}
              />
              <label htmlFor="man-gender-identity">Gym</label>
              <input
                id="passion-social-media"
                type="radio"
                name="passion"
                value="social-media"
                onChange={handleChange}
                checked={selected === "social-media"}
              />
              <label htmlFor="passion-social-media">Social Media</label>
              <input
                id="passion-movies"
                type="radio"
                name="passion"
                value="movies"
                onChange={handleChange}
                checked={selected === "movies"}
              />
              <label htmlFor="passion-movies">Movies</label>
            </div>

            <label>Drink of Choice</label>
            <div className="multiple-input-container">
              <input
                id="drink-choice-wine"
                type="radio"
                name="drink-choice"
                value="wine"
                onChange={handleChange}
                checked={selected === "wine"}
              />
              <label htmlFor="drink-choice-wine">Wine</label>
              <input
                id="drink-choice-all"
                type="radio"
                name="drink-choice"
                value="all"
                onChange={handleChange}
                checked={selected === "all"}
              />
              <label htmlFor="drink-choice-all">All drinks</label>
              <input
                id="drink-choice-beer"
                type="radio"
                name="drink-choice-beer"
                value="beer"
                onChange={handleChange}
                checked={selected === "beer"}
              />
              <label htmlFor="drink-choice-beer">Beer</label>
            </div>
            <div className="multiple-input-container">
              <input
                id="drink-choice-sober"
                type="radio"
                name="drink-choice-sober"
                value="sober"
                onChange={handleChange}
                checked={selected === "sober"}
              />
              <label htmlFor="drink-choice-sober">Sober</label>
              <input
                id="drink-choice-cocktails"
                type="radio"
                name="drink-choice"
                value="cocktails"
                onChange={handleChange}
                checked={selected === "cocktails"}
              />
              <label htmlFor="drink-choice-cocktails">Cocktails</label>
            </div>

            <label>Education</label>
            <div className="multiple-input-container">
              <input
                id="education-high-school"
                type="radio"
                name="education"
                value="high-school"
                onChange={handleChange}
                checked={selected === "high-school"}
              />
              <label htmlFor="man-gender-identity">High Shool</label>
              <input
                id="education-bachelor"
                type="radio"
                name="education"
                value="bachelor"
                onChange={handleChange}
                checked={selected === "bachelor"}
              />
              <label htmlFor="education-bachelor">Bachelor</label>
              <input
                id="education-master"
                type="radio"
                name="education"
                value="master"
                onChange={handleChange}
                checked={selected === "master"}
              />
              <label htmlFor="education-master">Master</label>
            </div>
            <div className="multiple-input-container">
              <input
                id="education-phd"
                type="radio"
                name="education"
                value="phd"
                onChange={handleChange}
                checked={selected === "phd"}
              />
              <label htmlFor="education-phd">PhD</label>
            </div>
          </section>

          <section>
            <label>Food Preferences</label>
            <div className="multiple-input-container">
              <input
                id="food-vegan"
                type="radio"
                name="food"
                value="vegan"
                onChange={handleChange}
                checked={selected === "vegan"}
              />
              <label htmlFor="food-vegan">Vegan</label>
              <input
                id="food-vegetarian"
                type="radio"
                name="food"
                value="vegetarian"
                onChange={handleChange}
                checked={selected === "vegetarian"}
              />
              <label htmlFor="food-vegetarian">Vegetarian</label>
              <input
                id="food-hala"
                type="radio"
                name="food"
                value="halal"
                onChange={handleChange}
                checked={selected === "halal"}
              />
              <label htmlFor="food-halal">Halal</label>
            </div>
            <div className="multiple-input-container">
              <input
                id="food-carnivore"
                type="radio"
                name="food"
                value="carnivore"
                onChange={handleChange}
                checked={selected === "carnivore"}
              />
              <label htmlFor="food-carnivore">Carnivore</label>
              <input
                id="food-omnivore"
                type="radio"
                name="food"
                value="omnivore"
                onChange={handleChange}
                checked={selected === "omnivore"}
              />
              <label htmlFor="food-omnivore">Omnivore</label>
            </div>
            <label>Which Pet do you like?</label>
            <div className="multiple-input-container">
              <input
                id="pet-dog"
                type="radio"
                name="pet"
                value="dpg"
                onChange={handleChange}
                checked={selected === "dog"}
              />
              <label htmlFor="man-gender-identity">Dog</label>
              <input
                id="pet-fish"
                type="radio"
                name="pet"
                value="fish"
                onChange={handleChange}
                checked={selected === "fish"}
              />
              <label htmlFor="pet-fish">Fish</label>
              <input
                id="pet-cat"
                type="radio"
                name="pet"
                value="cat"
                onChange={handleChange}
                checked={selected === "more"}
              />
              <label htmlFor="pet-cat">Cat</label>
            </div>
            <div className="multiple-input-container">
              <input
                id="pet-reptiles"
                type="radio"
                name="pet"
                value="reptiles"
                onChange={handleChange}
                checked={selected === "reptiles"}
              />
              <label htmlFor="pet-reptiles">Reptiles</label>
              <input
                id="pet-free"
                type="radio"
                name="pet"
                value="free"
                onChange={handleChange}
                checked={selected === "free"}
              />
              <label htmlFor="pet-free">Pet free</label>
            </div>
            <label>Smoking</label>
            <div className="multiple-input-container">
              <input
                id="smoking-socially"
                type="radio"
                name="smoking"
                value="socially"
                onChange={handleChange}
                checked={selected === "socially"}
              />
              <label htmlFor="smoking-socially">Socially</label>
              <input
                id="smoking-when-drinking"
                type="radio"
                name="smoking"
                value="when-drinking"
                onChange={handleChange}
                checked={selected === "when-drinking"}
              />
              <label htmlFor="smoking-when-drinking">When drinking</label>
              <input
                id="smoking-non-smoker"
                type="radio"
                name="smoking"
                value="non-smoker"
                onChange={handleChange}
                checked={selected === "non-smoker"}
              />
              <label htmlFor="smoking-non-smoker">Non-smoker</label>
            </div>
            <label>Social Media</label>
            <div className="multiple-input-container">
              <input
                id="social-media-influencer"
                type="radio"
                name="social-media"
                value="influencer"
                onChange={handleChange}
                checked={selected === "influencer"}
              />

              <label htmlFor="man-gender-identity">Influencer</label>
              <input
                id="social-media-socially"
                type="radio"
                name="social-media"
                value="socially"
                onChange={handleChange}
                checked={selected === "socially"}
              />
              <label htmlFor="social-media-socially">Socially</label>
              <input
                id="social-media-off-grid"
                type="radio"
                name="gender_identity"
                value="off-grid"
                onChange={handleChange}
                checked={selected === "off-grid"}
              />
              <label htmlFor="social-media-off-grid">Off Grid</label>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};
export default Questionnaire;
