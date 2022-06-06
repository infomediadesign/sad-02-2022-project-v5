import './App.css';
import Admin from './components/Admin/Admin';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import Sidenav from './components/Sidenav/Sidenav';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
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
    <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/signin" element={<Signin/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/test" element={<Test/>}/>
    </Routes>
  </BrowserRouter>
  );
}
