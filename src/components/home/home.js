import './Home.css';
import React from "react";
import Sidenav from '../Sidenav/Sidenav';
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