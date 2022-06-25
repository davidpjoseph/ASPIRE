import React from 'react'
import './Signup.css'

import {useState} from 'react'
import {Link, useNavigate } from "react-router-dom";
import {useUserAuth} from "../../Context/userAuthContext"
import {Alert} from 'react-bootstrap'
import { uid } from "uid";
import { db } from "../../Firebase/Config";
import { ref, set } from "firebase/database";

function Counsignup() {
  
  const[fullname,setFullname]=useState('');
  const[email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const {signUp} = useUserAuth();
  const navigate= useNavigate();
  const [error,setError] = useState("");

  function writeUserData() {
    
    set(ref(db, "User/" +fullname), {
      email: email,
      name: fullname,
    });
  }

   const handleSubmit =async(e)=>{
     e.preventDefault();
     try{
      await signUp(email,password);
      writeUserData();
      navigate("/")
     }catch(error){
       setError(error.message);
    }
}
  
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            
              <div className="input-box">
                
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div className="input-box">
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                ></input>
              </div>

              <div className="input-box">
                
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
            

            <div className="input-box button">
              <input type="submit" value="Register"></input>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}
            <Link to="/">
              <p className="message-log">
                Already registered? <a>Login</a>
              </p>
            </Link>
          </form>
          <div />
        </div>
      </div>
    </div>
  );
}
export default Counsignup;