import './App.css';
import Home from './components/Home/Home';
import Test from './components/Test/Test';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/signin" element={<Signin/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/test" element={<Test/>}/>
    </Routes>
  </BrowserRouter>
  );
}
