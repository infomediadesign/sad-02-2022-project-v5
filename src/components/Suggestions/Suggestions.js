import {motion} from "framer-motion";
import { useState } from "react";
import './Suggestions.css';

function Suggestions () {
    
        const  [isOpen, setIsOpen] = useState(false);


    return (
        <div className="Suggestions">
        <motion.div transition={{ layout: { duration: 1, type : "spring" }}} layout onClick={() => setIsOpen(!isOpen)}  className="card">
        <motion.div className="title">
        <img layout="position" className="profilephoto" src={require('./profile1.jpg')} />
        <motion.h2 layout="position">Shubham Choudhary</motion.h2>
        <motion.h3 layout="position">25 Years</motion.h3>
        <motion.h3 layout="position">Mannheim, Germany</motion.h3>
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