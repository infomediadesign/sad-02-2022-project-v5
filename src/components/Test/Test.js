import './Test.css';
import React,{useState} from "react";
import Sidenav from '../Sidenav/Sidenav';
import Axios from "axios";
const Test = () => {
    // const [data,setData] = useState([]);
    var data = {
        myid:"amadou@gmail.com",
        profileid:"pranav@gmail.com"
    }
    Axios.post('http://localhost:5000/api/postuserliked',{data}).then((response)=>{
            console.log(response)

            });
    // Axios.get('http://localhost:5000/api/getuserprofile/',{ params: data}).then((response)=>{
    // console.log(response.data)

    // });
            
    // const [data,setData] = useState([]);   
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [file, setFile] = useState("");
    // const [gender, setGender] = useState("");
    // const [preferredgender, setPreferredgender] = useState("");
    // const [dob, setDob] = useState("");
    // Axios.get('http://localhost:5000/api/getprofile').then((response)=>{
    //         console.log(response.data)
    //         setData(response.data);
    //         });
    // const handleTitle = (e) => {
    //     setTitle(e.target.value);
    // };
    // const handleDescription = (e) => {
    //     setDescription(e.target.value);
    // };
    // const handleFile = (e) => {
    //     setFile(e.target.value);
    // };
    // const handleGender = (e) => {
    //     setGender(e.target.value);
    // };
    // const handlePreferredGender = (e) => {
    //     setPreferredgender(e.target.value);
    // };
    // const handleDOB = (e) => {
    //     setDob(e.target.value);
    // };
    
  return (
    <div className="container">
        <div className="sidenav">
            <Sidenav />
        </div>
        {/* <div className='HomeMain'>
        <form action="http://localhost:5000/api/addprofile" method="POST" enctype="multipart/form-data">
            <div>
                <label for="name">Image Title</label>
                <input onChange={handleTitle} type="text" id="name" placeholder="Name" 
                       value={title} name="name" required/>
            </div>
            <div>
                <label for="about">About</label>
                <textarea onChange={handleDescription} id="about" name="about" value={description} rows="2" 
                          placeholder="Description" required>
                </textarea>
            </div>
            <div>
                <label for="gender">Gender</label>
                
                <input onChange={handleGender} type="gender" id="gender" placeholder="Gender" 
                       value={gender} name="gender" required/>
            </div>
            <div>
                <label for="preferredgender">Preferredgender</label>
                
                <input onChange={handlePreferredGender} type="preferredgender" id="preferredgender" placeholder="Preferredgender" 
                       value={preferredgender} name="preferredgender" required/>
            </div>
            <div>
                <label for="dob">DOB</label>
                
                <input onChange={handleDOB} type="dob" id="dob" placeholder="Date Of Birth" 
                       value={dob} name="dob" required/>
            </div>
            <div>
                <label for="image">Upload Image</label>
                <input onChange={handleFile} type="file" id="image" 
                       name="image" value={file} required/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    <h1>Uploaded Images</h1>
    <div>
    <img className="image" alt="Profile" src={`data:image/jpeg;base64,${data.postImgBase64}`} />
    {data.map((object, i) => {return(<img alt="test" src={`data:image/jpeg;base64,${Buffer.from(object[0].img.data).toString('base64')}`} />)})} 
    </div> */}
    </div>
  )
}

export default Test