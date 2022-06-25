import React, { useState, useEffect } from 'react'
import { ref, onValue } from "firebase/database";
import { db } from "../../Firebase/Config";
import "../HOD/Hod.css";
function ViewTimetable() {
    const [data, setData] = useState({});
    useEffect(() => {
      const dbRef1 = ref(db, `Unapproved/`);
      onValue(dbRef1, (snapshot) => {
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
    <div>
      <div className="timetablebox1">
        <h1>Remedial Timetable</h1>
        <div className="input-box">
          <span className="details"> With Effect from </span>
          <span className="bold"> {data.date1}</span>
          <span className="details"> to </span>
          <span className="bold"> {data.date2}</span>
        </div>

        <h2>Time : 4:30pm - 5:30pm</h2>
        <table className="Attendence">
          <tr>
            <th>Year</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
          </tr>
          <tr>
            <th>I</th>
            <td>{data.year1subject1}</td>
            <td>{data.year1subject2}</td>
            <td>{data.year1subject3}</td>
            <td>{data.year1subject4}</td>
          </tr>
          <tr>
            <th>II</th>
            <td>{data.year2subject1}</td>
            <td>{data.year2subject2}</td>
            <td>{data.year2subject3}</td>
            <td>{data.year2subject4}</td>
          </tr>

          <tr>
            <th>III</th>
            <td>{data.year3subject1}</td>
            <td>{data.year3subject2}</td>
            <td>{data.year3subject3}</td>
            <td>{data.year3subject4}</td>
          </tr>

          <tr>
            <th>IV</th>
            <td>{data.year4subject1}</td>
            <td>{data.year4subject2}</td>
            <td>{data.year4subject3}</td>
            <td>{data.year4subject4}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ViewTimetable