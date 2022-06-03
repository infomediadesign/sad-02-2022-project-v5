import './Home.css';
import React,{useState, useEffect} from "react";
import Sidenav from '../Sidenav/Sidenav';
import axios from "axios";
import {useCookies} from "react-cookie";
import {ToastContainer, toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
 
const Home = () => {
const [data,setData] = useState([]);   
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    axios.get('http://localhost:5000/api/getdata').then((response)=>{
            setData(response.data);
            });
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }; 
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleFile = (e) => {
        setFile(e.target.value);
    };

    const navigate = useNavigate();

    const [cookies,setCookie,removeCookie] = useCookies([]);
    useEffect(()=>{
        const verifyUser = async () =>{
            if(!cookies.jwt) {
                navigate("/signin");  
            } else {
                const {data} = await axios.post("http://localhost:5000",{},{withCredentials: true});
                if(!data.status){
                    removeCookie("jwt");
                    navigate("/signin");
                } else toast(`Hello ${data.user}`,{theme:"dark"});
            }
        };
        verifyUser();
    },[cookies,navigate, removeCookie]);

    const logOut = () => {
        removeCookie("jwt");
        navigate("/signin");
    }


    // const addImage = (e) => {
    //     Axios.post('http://localhost:5000/api/postdata',{}).then((response)=>{
    //             debugger;
    //             setdata(response.data);
    //             console.log(data)
    //         });
    // };
  return (
      <>
    <div className="container">
        <div className="sidenav">
            <Sidenav/>
        </div>
    <h1>Uploaded Images</h1>
    <button onClick={logOut}>Log Out</button>
    <div>
    <img className="image" alt="Profile" src={`data:image/jpeg;base64,${data.postImgBase64}`} />
    {/* {data.map((object, i) => {return(<img alt="test" src={`data:image/jpeg;base64,${Buffer.from(object[0].img.data).toString('base64')}`} />)})} */}
    </div>
    </div>
    <ToastContainer/>
    </>
  );
}
export default Home;