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

       setTimeout(() => {
            setIsToggled(false);
        }, 1000);

        const [isToggled2, setIsToggled2] = useState(true);

        setTimeout(() => {
             setIsToggled2(false);
         }, 1000);
 
         Axios.get('http://localhost:5000/api/getuserprofile').then((response)=>{

            setData(response.data);

            });
         

    return (
        <div className="Suggestions">
            <motion.div id="card_div" transition={{ layout: { duration: 1, type: "spring" } }} layout onClick={() => setIsOpen(!isOpen)} className="card">
                <motion.div className="title">
                    <img layout="position" className="profilephoto" src={require('./profile4.jpg')} />
                    <motion.div className="names">
                        <motion.h1 layout="position">{data.name}</motion.h1>
                        <motion.h3 layout="position">{data.age}</motion.h3>
                    </motion.div>
                    <motion.div className="names">

                        <motion.h5 layout="position"> Lives in:</motion.h5>
                        <motion.h4 layout="position"> &nbsp; {data.location}</motion.h4>

                    </motion.div>
                    <motion.div className="names">
                        <motion.h5 layout="position"> {Location} &nbsp;</motion.h5>
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
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />
                        </motion.div>

                        <motion.h3 layout="position">My Drink of Choice</motion.h3>
                        <motion.div className="details">
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />



                        </motion.div>
                        <motion.h3 layout="position">Smoking ?</motion.h3>
                        <motion.div className="details">
                            <Tags Tagname="shubham" />





                        </motion.div>
                        <motion.h3 layout="position">Pets that I like</motion.h3>
                        <motion.div className="details">
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />
                            <Tags Tagname="shubham" />



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