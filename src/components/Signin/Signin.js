import "./Signin.css";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

export default function Signin(){
    const navigate = useNavigate();
    const [values,setValues] = useState({
        email:"",
        password:"",
    });


//handle errors
const generateError = (err) => toast.error(err, {
    position: "bottom-right",
});

//prevent form submission
//calling API : try/catch
//{data} : will be destructured from the axios response
const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const {data} = await axios.post("http://localhost:5000/signin",{
        ...values, //destructure the values over so email and password will be sent to the database
    });
    
    if(data){
        if(data.errors){
            const {email,password} = data.errors;
            if(email) generateError(email);
            else if(password) generateError(password);
            }else{
                navigate("/");
            }
    }
    } catch(err){
        console.log(err);
    }
};



    return ( 
    <div className = "sigInBody">
    <div className = "SignIncontainer">
    <h2> Signin Account </h2> 
    <form onSubmit = {
        (e) => handleSubmit(e)}>
    <div>
    <label> Email </label> 
    <input type = "email"
    name = "email"
    placeholder = "Email"
    onChange = {
        (e) => setValues({...values, [e.target.name]: e.target.value })
    }/> </div > 
    <div>
    <label> Password </label> 
    <input type = "password"
        name = "password"
        placeholder = "Password"
        onChange = {
            (e) => setValues({...values, [e.target.name]: e.target.value })
        }/> 
    </div >
    <button type = "submit" > Submit </button> 
    <span> New to this application ? <Link to = "/register" > Register </Link> </span> 
    </form>
    <ToastContainer/>
    </div> 
    </div >
    );
}