import React from 'react'
import "./Dashboard.css"
import { db } from "../../Firebase/Config";
import {useState, useEffect } from 'react';
import { useUserAuth } from "../../Context/userAuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  equalTo
} from "firebase/database";
import { Table } from "react-bootstrap";




function Studname() {
  const {user}=useUserAuth();
  const [data,setData]=useState({});
  const useremail=user.email;
  
  
   useEffect(() => {
     const dbRef =query(ref(db, "User/"),orderByChild('email'),
      equalTo(useremail));
      console.log(dbRef);
     onValue(dbRef, (snapshot) => {
       if(snapshot.val()!=null){
         setData({...snapshot.val()});
       }else{
         setData({});
       }
       });
       return()=>{
         setData({});
       }
      
   }, []);
  
  return (
    <div className="stud_details">
      {Object.keys(data).map((row, index) => {
        return (
          
          <table
            cellpadding="20"
            width="60%"
            style={{
              fontSize: 20,
              borderWidth: "1px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
            }}
          >
            <tr>
              <th colspan="4" style={{ background: "#d3e3f7", padding: 10 }}>
                Student Details
              </th>
            </tr>
            <tr key={row}>
              <td>
                <b>Admission No:</b>
              </td>
              <td>
                <span>{data[row].admn}</span>{" "}
              </td>
              <td>
                <b>Student Name:</b>
              </td>
              <td>
                {" "}
                <span>{data[row].name}</span>{" "}
              </td>
            </tr>

            <tr key={row}>
              <td>
                <b>Date of Birth:</b>
              </td>
              <td>
                {" "}
                <span>{data[row].dob}</span>{" "}
              </td>
              <td>
                <b>Batch:</b>
              </td>
              <td>
                {" "}
                <span>{data[row].batch}</span>{" "}
              </td>
            </tr>
            <tr key={row}>
              <td>
                <b>Department:</b>{" "}
              </td>
              <td>
                <span>CSE</span>{" "}
              </td>
              <td>
                <b>Division:</b>
              </td>
              <td>
                {" "}
                <span>{data[row].division}</span>{" "}
              </td>
            </tr>
          </table>
          
        );
      })}
    </div>
  );
}

export default Studname;