// import Nav from '../components/Nav'
import { useState } from "react";
// import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import "./Questionnaire.css";

const Questionnaire = () => {

  var passionTemp;
  var petTemp;

  const [selectedPassions, setSelectedPassions] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [selectedPet, setSelectedPet] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");
  const [selectedSmoking, setSelectedSmoking] = useState("");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");

  const handleSubmit = () => {
    console.log("submitted");
  };


  const handlePassionChange = (event) => {
    passionTemp = selectedPassions;
    if (event.target.checked) {
      passionTemp.push(event.target.value);
    } else {
      var index = passionTemp.indexOf(event.target.value);
      if (index !== -1) {
        passionTemp.splice(index, 1);
      }
    }
    setSelectedPassions(passionTemp);
  };

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };

  const handleEducationChange = (event) => {
    setSelectedEducation(event.target.value);
  };

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
  };

  const handlePetChange = (event) => {
    petTemp = selectedPet;
    if (event.target.checked) {
      petTemp.push(event.target.value);
    } else {
      var index = petTemp.indexOf(event.target.value);
      if (index !== -1) {
        petTemp.splice(index, 1);
      }
    }
    setSelectedPet(petTemp);
  };

  const handleSmokingChange = (event) => {
    setSelectedSmoking(event.target.value);
  };

  const handleSocialMediaChange = (event) => {
    setSelectedSocialMedia(event.target.value);
  };

  return (
    <>
      <div className="Questionnaire">
          <h2>ADD MORE DETAILS</h2>

          <form onSubmit={handleSubmit}>
            <section>
              <label>Passions</label>
              <div className="multiple-input-container">
                <input
                  id="passion-hiphop"
                  type="checkbox"
                  name="passion"
                  value="hiphop"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-hiphop">Hip Hop</label>
                <input
                  id="passion-basketball"
                  type="checkbox"
                  name="passion"
                  value="basketball"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-basketball">Basketball</label>
                <input
                  id="passion-theater"
                  type="checkbox"
                  name="passion"
                  value="theater"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-theater">Theater</label>
                <br />
              </div>
              <div className="multiple-input-container">
                <input
                  id="passion-meditation"
                  type="checkbox"
                  name="passion"
                  value="meditation"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-meditation">Meditation</label>
                <input
                  id="passion-yoga"
                  type="checkbox"
                  name="passion"
                  value="yoga"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-yoga">Yoga</label>
                <input
                  id="passion-reading"
                  type="checkbox"
                  name="passion"
                  value="reading"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-reading">Reading</label>
              </div>
              <div className="multiple-input-container">
                <input
                  id="passion-running"
                  type="checkbox"
                  name="passion"
                  value="running"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-running">Running</label>
                <input
                  id="passion-photography"
                  type="checkbox"
                  name="passion"
                  value="photography"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-photography">Photography</label>
                <input
                  id="passion-makup"
                  type="checkbox"
                  name="passion"
                  value="makeup"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-makup">Makeup</label>
              </div>
              <div className="multiple-input-container">
                <input
                  id="passion-gym"
                  type="checkbox"
                  name="passion"
                  value="gym"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-gym">Gym</label>
                <input
                  id="passion-social-media"
                  type="checkbox"
                  name="passion"
                  value="social-media"
                  onChange={handlePassionChange}
                />
                <label htmlFor="passion-social-media">Social Media</label>
                <input
                  id="passion-movies"
                  type="checkbox"
                  name="passion"
                  value="movies"
                  onChange={handlePassionChange}
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
                  onChange={handleDrinkChange}
                  checked={selectedDrink === "wine"}
                />
                <label htmlFor="drink-choice-wine">Wine</label>
                <input
                  id="drink-choice-all"
                  type="radio"
                  name="drink-choice"
                  value="all"
                  onChange={handleDrinkChange}
                  checked={selectedDrink === "all"}
                />
                <label htmlFor="drink-choice-all">All drinks</label>
                <input
                  id="drink-choice-beer"
                  type="radio"
                  name="drink-choice-beer"
                  value="beer"
                  onChange={handleDrinkChange}
                  checked={selectedDrink === "beer"}
                />
                <label htmlFor="drink-choice-beer">Beer</label>
              </div>
              <div className="multiple-input-container">
                <input
                  id="drink-choice-sober"
                  type="radio"
                  name="drink-choice-sober"
                  value="sober"
                  onChange={handleDrinkChange}
                  checked={selectedDrink === "sober"}
                />
                <label htmlFor="drink-choice-sober">Sober</label>
                <input
                  id="drink-choice-cocktails"
                  type="radio"
                  name="drink-choice"
                  value="cocktails"
                  onChange={handleDrinkChange}
                  checked={selectedDrink === "cocktails"}
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
                  onChange={handleEducationChange}
                  checked={selectedEducation === "high-school"}
                />
                <label htmlFor="education-high-school">High Shool</label>
                <input
                  id="education-bachelor"
                  type="radio"
                  name="education"
                  value="bachelor"
                  onChange={handleEducationChange}
                  checked={selectedEducation === "bachelor"}
                />
                <label htmlFor="education-bachelor">Bachelor</label>
                <input
                  id="education-master"
                  type="radio"
                  name="education"
                  value="master"
                  onChange={handleEducationChange}
                  checked={selectedEducation === "master"}
                />
                <label htmlFor="education-master">Master</label>
              </div>
              <div className="multiple-input-container">
                <input
                  id="education-phd"
                  type="radio"
                  name="education"
                  value="phd"
                  onChange={handleEducationChange}
                  checked={selectedEducation === "phd"}
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
                  onChange={handleFoodChange}
                />
                <label htmlFor="food-vegan">Vegan</label>
                <input
                  id="food-vegetarian"
                  type="radio"
                  name="food"
                  value="Vegetarian"
                  onChange={handleFoodChange}
                />
                <label htmlFor="food-vegetarian">Vegetarian</label>
                <input
                  id="food-halal"
                  type="radio"
                  name="food"
                  value="halal"
                  onChange={handleFoodChange}
                />
                <label htmlFor="food-halal">Halal</label>
              </div>
              <div className="multiple-input-container">
                <input
                  id="food-carnivore"
                  type="radio"
                  name="food"
                  value="carnivore"
                  onChange={handleFoodChange}
                />
                <label htmlFor="food-carnivore">Carnivore</label>
                <input
                  id="food-omnivore"
                  type="radio"
                  name="food"
                  value="omnivore"
                  onChange={handleFoodChange}
                />
                <label htmlFor="food-omnivore">Omnivore</label>
              </div>
              <label>Which Pet do you like?</label>
              <div className="multiple-input-container">
                <input
                  id="pet-dog"
                  type="radio"
                  name="pet"
                  value="dog"
                  onChange={handlePetChange}
                />
                <label htmlFor="pet-dog">Dog</label>
                <input
                  id="pet-fish"
                  type="radio"
                  name="pet"
                  value="fish"
                  onChange={handlePetChange}
                />
                <label htmlFor="pet-fish">Fish</label>
                <input
                  id="pet-cat"
                  type="radio"
                  name="pet"
                  value="cat"
                  onChange={handlePetChange}
                />
                <label htmlFor="pet-cat">Cat</label>
              </div>
              <div className="multiple-input-container">
                <input
                  id="pet-reptiles"
                  type="checkbox"
                  name="pet"
                  value="reptiles"
                  onChange={handlePetChange}
                />
                <label htmlFor="pet-reptiles">Reptiles</label>
                <input
                  id="pet-free"
                  type="checkbox"
                  name="pet"
                  value="pet-free"
                  onChange={handlePetChange}
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
                  onChange={handleSmokingChange}
                  checked={selectedSmoking === "socially"}
                />
                <label htmlFor="smoking-socially">Socially</label>
                <input
                  id="smoking-when-drinking"
                  type="radio"
                  name="smoking"
                  value="when-drinking"
                  onChange={handleSmokingChange}
                  checked={selectedSmoking === "when-drinking"}
                />
                <label htmlFor="smoking-when-drinking">When drinking</label>
                <input
                  id="smoking-non-smoker"
                  type="radio"
                  name="smoking"
                  value="non-smoker"
                  onChange={handleSmokingChange}
                  checked={selectedSmoking === "non-smoker"}
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
                  onChange={handleSocialMediaChange}
                  checked={selectedSocialMedia === "influencer"}
                />

                <label htmlFor="social-media-influencer">Influencer</label>
                <input
                  id="social-media-socially"
                  type="radio"
                  name="social-media"
                  value="socially"
                  onChange={handleSocialMediaChange}
                  checked={selectedSocialMedia === "socially"}
                />
                <label htmlFor="social-media-socially">Socially</label>
                <input
                  id="social-media-off-grid"
                  type="radio"
                  name="gender_identity"
                  value="off-grid"
                  onChange={handleSocialMediaChange}
                  checked={selectedSocialMedia === "off-grid"}
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
