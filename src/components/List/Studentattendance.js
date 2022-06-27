import "./Form.css"
import { db } from "../../Firebase/Config";
import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  equalTo,
} from "firebase/database";
import { useUserAuth } from "../../Context/userAuthContext";


function Studentattendance() {
const [data, setData] = useState({});
const { user } = useUserAuth();
const useremail = user.email;
const weak = "jasminjames544@gmail.com";
const bright = "jenniferjohn@gmail.com";
useEffect(() => {
  if (useremail === weak) {
  const dbRef = ref(db, "Attendance/6");
  onValue(dbRef, (snapshot) => {
    if (snapshot.val() != null) {
      setData({ ...snapshot.val() });
    } else {
      setData({});
    }
  });
  return () => {
    setData({});
  };}
  else if (useremail === bright) {
    const dbRef = ref(db, "Attendance/7");
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
  }
  else{
    const dbRef = ref(db, "Attendance/3");
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
  }
}, []);
 return (
  <div>
    
          <>
            <table className="single_attendance">
              <th>% Attendence for Each Subject</th>
            </table>

            <table className="single_attendance">
              <tr>
                
                
                <th>CS201</th>
                <th>CS203</th>
                <th>CS205</th>
                <th>CS207</th>
                <th>CS209</th>
                <th>CS265</th>
              </tr>
              

              <tr>
                
                
                

                <td>{data.cs201}</td>
                <td>{data.cs203}</td>
                <td>{data.cs205}</td>
                <td>{data.cs207}</td>
                <td>{data.cs209}</td>
                <td>{data.cs265}</td>
                
              </tr>
              <tr></tr>
            </table>
          </>
        
  
  </div>
);
}

export default Studentattendance;
