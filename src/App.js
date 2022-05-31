import { Route, Routes } from "react-router";
//import  Loader  from "./layout/Loader";
import Home from './components/Home'
import Login from "./components/auth/Login";
import {Toaster} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser, logout } from "./redux/actions/auth";

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  })
  return ( 
    <div>
      <Toaster/>
      <button onClick={e=> {
        dispatch(logout())
        window.location.reload()
      }}>LOGOUT</button>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
      </Routes>
    </div>
   );
}
 
export default App;