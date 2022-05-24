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
                console.log(data)
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
        <div className='HomeMain'>
        <form action="http://localhost:5000/api/postdata" method="POST" enctype="multipart/form-data">
            <div>
                <label for="name">Image Title</label>
                <input onChange={handleTitle} type="text" id="name" placeholder="Name" 
                       value={title} name="name" required/>
            </div>
            <div>
                <label for="desc">Image Description</label>
                <textarea onChange={handleDescription} id="desc" name="desc" value={description} rows="2" 
                          placeholder="Description" required>
                </textarea>
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
    {/* {data.map((object, i) => {<img src={`data:image/jpeg;base64,${object}`} />})} */}
    </div>
    </div>
  )
}

export default Home