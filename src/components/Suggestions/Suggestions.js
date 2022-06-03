import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './Suggestions.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tags from "../../Tags/Tags";
import { TimedImage } from "react-timed-image"
import Axios from "axios";

const Suggestions = () => {
    const [data,setData] = useState([]);  
    const [isOpen, setIsOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(true);
    const [age, setAge] = useState("");
      
  
       setTimeout(() => {
            setIsToggled(false);
        }, 1000);

        const [isToggled2, setIsToggled2] = useState(true);

        setTimeout(() => {
             setIsToggled2(false);
         }, 1000);
 
      

            useEffect(() => {
                
                Axios.get('http://localhost:5000/api/getuserprofile').then((response)=>{
                
                    setData(response.data.data[1]);
                    setAge(getAge(response.data.data[1].dob))
                    // getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2)
                    console.log(response.data.data[1].dob)
                    console.log(age)
                    })
              });
     
            
              console.log(getDistanceFromLatLonInKm(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));
              


                function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2-lat1);  // deg2rad below
                var dLon = deg2rad(lon2-lon1); 
                var a = 
                    Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2)
                    ; 
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                var d = R * c; // Distance in km
                return d;
                }

                function deg2rad(deg) {
                return deg * (Math.PI/180)
                }



            function getAge(dateString) {
                var birthString = dateString.split("-").reverse().join("-")
                var today = new Date();
                var birthDate = new Date(birthString);
                var userage = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    userage--;

                    
                }
                return userage;
            }
                
           

            
    return (

        
        <div className="Suggestions">
        
            <motion.div id="card_div" transition={{ layout: { duration: 1, type: "spring" } }} layout onClick={() => setIsOpen(!isOpen)} className="card">
                <motion.div className="title">
                    <img layout="position" className="profilephoto" src={require('./profile4.jpg')} />
                    <motion.div className="names">
                        <motion.h1 layout="position">{data.name}</motion.h1>
                        
                        <motion.h3 layout="position">{age} </motion.h3>
                    </motion.div>
                   
                    <motion.div className="names">
                        <motion.h5 layout="position">  &nbsp;</motion.h5>
                        <motion.h5 layout="position"> Kms far from you</motion.h5>
                    </motion.div>
                </motion.div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="expand">
                        <motion.h3 layout="position">About Me</motion.h3>
                        <motion.h5 layout="position"> {data.about}</motion.h5>
                        <motion.h3 layout="position">My Passion</motion.h3>
                        <motion.div className="details">
                        {data.passion.map((object) => <Tags Tagname= {object}/>)}
                        </motion.div>

                        <motion.h3 layout="position">My Food Preverence</motion.h3>
                        <motion.div className="details">
                        {data.foodpreferences.map((object) => <Tags Tagname= {object}/>)}
                        </motion.div>

                        <motion.h3 layout="position">My Drink of Choice</motion.h3>
                        <motion.div className="details">
                        
                        <Tags Tagname={data.bestdrink} />


                        </motion.div>
                        <motion.h3 layout="position">Smoking ?</motion.h3>
                        <motion.div className="details">
                            <Tags Tagname={data.smoking} />





                        </motion.div>
                        <motion.h3 layout="position">Pets that I like</motion.h3>
                        <motion.div className="details">
                        {data.bestpets.map((object) => <Tags Tagname= {object}/>)}



                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
            <button className="button" onClick={() => setIsToggled(!isToggled)}>
                  < img className="icons" src={require('./like.png')} />
            </button>
            {isToggled && <img
                src="https://i.imgur.com/Zkwj970.png" alt="new" className="animation_like" />}
            <button className="button2"  onClick={() => { setIsToggled2(!isToggled2)}}><img className="icons2" src={require('./thumb-down.png')} /></button>
            {isToggled2 && <img
                src="https://i.imgur.com/XqQZ4KR.png" alt="new" className="animation_like" />}
        </div>


    );
}

export default Suggestions; 