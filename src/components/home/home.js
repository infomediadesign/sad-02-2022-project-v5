import './Home.css';
import React,{useState} from "react";
import Sidenav from '../Sidenav/Sidenav';
import Suggestions from '../Suggestions/Suggestions';
import Axios from "axios";
const Home = () => {
    
  return (
    <div className="container">
        <div className="sidenav">
            <Sidenav/>
        </div>
        <div className="suggestion">
          <Suggestions 
          Username="Shubham Choudhary"
           Age="25" 
           Place="Mannheim, Germany"
           Location="35" 
           About="Hey Baby Girl" />
        </div>
       
    

    </div>
  )
}

export default Home