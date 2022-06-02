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
   
    

    </div>
  )
}

export default Home