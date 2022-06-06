import {motion} from "framer-motion";
import { useState } from "react";
import './Suggestions.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tags from "../../Tags/Tags";


    const Suggestions = ({ Username , Age , Place , Location, About, }) => {
    
        const  [isOpen, setIsOpen] = useState(false);


    return (
        <div className="Suggestions">
        <motion.div transition={{ layout: { duration: 1, type : "spring" }}} layout onClick={() => setIsOpen(!isOpen)}  className="card">
        <motion.div className="title">
        <img layout="position"   className="profilephoto" src={require('./profile4.jpg')} />
        <motion.div className="names">
        <motion.h1 layout="position">{Username}</motion.h1>
        <motion.h3 layout="position">{Age}</motion.h3>
        </motion.div>
        <motion.div className="names">
        
        <motion.h5 layout="position"> Lives in:</motion.h5>
        <motion.h4 layout="position"> &nbsp; {Place}</motion.h4>
        
        </motion.div>
        <motion.div className="names">
        <motion.h5 layout="position"> {Location} &nbsp;</motion.h5>
        <motion.h5 layout="position"> Kms far from you</motion.h5>
        </motion.div>
        </motion.div>
        {isOpen && (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration:1}}
        className="expand">
            <motion.h3 layout="position">About Me</motion.h3>
            <motion.h5 layout="position"> {About}</motion.h5>
            <motion.h3 layout="position">My Passion</motion.h3>
            <motion.div className="details"> 
          <Tags Tagname="shubham" />
          <Tags Tagname="shubham" />
          <Tags Tagname="shubham" />
          <Tags Tagname="shubham" />
          <Tags Tagname="shubham" />
          <Tags Tagname="shubham" />
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
        <button className="button" > <img className="icons" src={require('./like.png')}/></button>
        <button className="button2"><img className="icons2" src={require('./thumb-down.png')}/></button>
        </div>
        
     );
}
 
export default Suggestions; 