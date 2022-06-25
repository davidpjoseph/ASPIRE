import React from 'react'
import './Signup.css'

import {useState} from 'react'
import {Link, useNavigate } from "react-router-dom";
import {useUserAuth} from "../../Context/userAuthContext"
import {Alert} from 'react-bootstrap'

import {db} from "../../Firebase/Config"
import {ref, set } from 'firebase/database';


function Studsignup() {
  
  
  const[fullname,setFullname]=useState('');
  const[email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const [classname, setClass] = useState('');
  const [batch, setBatch] = useState("");
  const [sem, setSem] = useState("");
  const [date, setDate] = useState("");
  const [admission, setAdmission] = useState("");
  const {signUp} = useUserAuth();
  const navigate= useNavigate();
  const [error,setError] = useState("");

  function writeUserData(){
    
    set(ref(db,"User/" +fullname),{
      
     email:email,
    name:fullname,
     division:classname,
     batch:batch,
     dob:date,
     admn:admission,
     sem:sem,
    })
  }
    

   

  const handleSubmit =async(e)=>{
     e.preventDefault();
     try{
      await signUp(email,password);
      writeUserData();
      navigate("/");
     }catch(error){
       setError(error.message);
    }
}
  
  return (
    <div>
      <div className="container">
        <div className="title">Sign Up</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter your name"
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Batch</span>
                <input
                  type="text"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  placeholder="2018-2022"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Semester</span>
                <input
                  type="text"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                  placeholder="S7"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Class</span>
                <input
                  type="text"
                  value={classname}
                  onChange={(e) => setClass(e.target.value)}
                  placeholder="A or B"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">DOB</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="dd-mm-yyyy"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Admission no.</span>
                <input
                  type="text"
                  value={admission}
                  onChange={(e) => setAdmission(e.target.value)}
                  placeholder="18/CS/001"
                  required
                ></input>
              </div>
            </div>

            <div className="input-box button">
              <input type="submit" value="Register"></input>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}
          </form>
          <Link to="/">
            <p className="message-log">
              Already registered? <a>Login</a>
            </p>
          </Link>
          <div />
        </div>
      </div>
    </div>
  );
}
export default Studsignup;