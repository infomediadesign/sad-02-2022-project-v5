import {motion} from "framer-motion";
import { useState } from "react";
import './Suggestions.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Suggestions () {
    
        const  [isOpen, setIsOpen] = useState(false);


    return (
        <div className="Suggestions">
        <motion.div transition={{ layout: { duration: 1, type : "spring" }}} layout onClick={() => setIsOpen(!isOpen)}  className="card">
        <motion.div className="title">
        <img layout="position" className="profilephoto" src={require('./profile4.jpg')} />
        <motion.div className="names">
        <motion.h1 layout="position">Shubham Choudhary</motion.h1>
        <motion.h3 layout="position">25</motion.h3>
        </motion.div>
        <motion.div className="names">
        
        <motion.h5 layout="position"> Lives in:</motion.h5>
        <motion.h4 layout="position"> &nbsp; Mannheim, Germany</motion.h4>
        
        </motion.div>
        <motion.div className="names">
        <motion.h5 layout="position"> 20 &nbsp;</motion.h5>
        <motion.h5 layout="position"> Kms far from you</motion.h5>
        </motion.div>
        </motion.div>
        {isOpen && (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration:1}}
        className="expand">
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
            <span>fehnbvjhbfjhbwfjsssssssssssshjafgkbkjbakjbfdsakbkbkbavbkjbdvkdvbkdvbkbvdk</span>
           </motion.div> 
        )}   
        </motion.div>
        <button className="button" > <img className="icons" src={require('./like.png')}/></button>
        <button className="button2"><img className="icons2" src={require('./thumb-down.png')}/></button>
        </div>
        
     );
}
 
export default Suggestions; 