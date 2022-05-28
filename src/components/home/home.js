import './Home.css';
import React,{useState} from "react";
import Sidenav from '../Sidenav/Sidenav';
import Axios from "axios";
const Home = () => {
    const [data,setData] = useState([]);   
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    Axios.get('http://localhost:5000/api/getdata').then((response)=>{
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
    // const addImage = (e) => {
    //     Axios.post('http://localhost:5000/api/postdata',{}).then((response)=>{
    //             debugger;
    //             setdata(response.data);
    //             console.log(data)
    //         });
    // };
  return (
    <div className="container">
        <div className="sidenav">
            <Sidenav/>
        </div>
    <h1>Uploaded Images</h1>
    <div>
    <img className="image" alt="Profile" src={`data:image/jpeg;base64,${data.postImgBase64}`} />
    {/* {data.map((object, i) => {return(<img alt="test" src={`data:image/jpeg;base64,${Buffer.from(object[0].img.data).toString('base64')}`} />)})} */}
    </div>
    </div>
  )
}

export default Home