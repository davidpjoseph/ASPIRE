import React from 'react'
import "./Enroll.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../Firebase/Config";
import { ref, set } from "firebase/database";

function CreateCourse() {
   
   const [ccode, setCoursecode] = useState("");
   const [cname, setCoursename] = useState("");

   
   const navigate = useNavigate();
   

   function writeUserData() {
     set(ref(db, "Course/"+ccode), {
       ccode: ccode,
       cname: cname,
     });
   }

   const handleSubmit =  (e) => {
     e.preventDefault();
      writeUserData();
      setCoursecode("");
      setCoursename("");
      };
  return (
    <div>
      <div className="formadd">
        <form className="login-formadd" onSubmit={handleSubmit}>
          <label>
            <h4>Course Code</h4>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={ccode}
              onChange={(e) => setCoursecode(e.target.value)}
              placeholder="Enter course code"
              required
            ></input>
          </div>
          <label>
            <h4>Course Name</h4>
          </label>
          <div className="input-box">
            <input
              type="text"
              value={cname}
              onChange={(e) => setCoursename(e.target.value)}
              placeholder="Enter course name"
              required
            ></input>
          </div>

          <div className="input-box button">
            <input type="submit" value="Add Course"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCourse
