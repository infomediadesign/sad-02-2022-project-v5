import "./Register.css";
import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import axios from "axios";

export default function Register(){
    const [values,setValues] = useState({
        email:"",
        password:"",
    });

//prevent form submission
//calling API : try/catch
//{data} : will be destructured from the axios response
const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const {data} = await axios.post("http://localhost:3000/register",{
        ...values, //destructure the values over so email and password will be sent to the database
    });
    } catch(err){
        console.log(err);
    }
};

    return ( 
        <div className="registerBody">
        <div className="registerContainer">
            <h2>Register Account</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})}/> 
                </div> 
                <div>
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={(e)=>setValues({...values, [e.target.name]: e.target.value})}/>
                </div>
                <button type="submit">Submit</button>
                <span>
                    Already have an account? <Link to="/signin">Signin</Link>
                </span>
            </form>
            <ToastContainer/>
        </div>
        </div>
    );
}