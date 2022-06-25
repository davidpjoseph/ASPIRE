import React, { useState, useEffect } from "react";
import "./Courses.css"
import {Link, NavLink } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../../Firebase/Config";
function ViewCourses() {
  const [data, setData] = useState({});
  useEffect(() => {
    const dbRef = ref(db, "Course/");
    onValue(dbRef, (snapshot) => {
      if (snapshot.val() != null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  
  
  return (
    <div className="main-container">
      {Object.keys(data).map((row, index) => {
        
        return (
          <div className="cardcourse card-1">
            <Link to={`/teacher/analysis/${data[row].ccode}`}>
              <h4 className="cardcourse_code">&ensp;&ensp;{data[row].ccode}</h4>
              <h2 className="cardcourse__title">{data[row].cname}</h2>
            </Link>
          </div>
        );
      })}
     
    </div>
  );

}

export default ViewCourses