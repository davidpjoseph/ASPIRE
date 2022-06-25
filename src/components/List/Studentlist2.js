import "./Form.css";
import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/Config";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Studentlist2() {
  const [data, setData] = useState({});
  useEffect(() => {
    const dbRef = ref(db, "Grade/");
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
    <div>
      <>
        <Table className="single_sub">
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Roll No</th>
              <th>Name</th>
              <th>S1</th>
              <th>S2</th>
              <th>S3</th>
              <th>S4</th>
              <th>S5</th>
              <th>CGPA</th>
              <th>Backlogs</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((row, index) => {
              return (
                <tr key={row}>
                  <td>{data[row].RollNo}</td>
                  <td>{data[row].Name}</td>
                  <td>{data[row].S1}</td>
                  <td>{data[row].S2}</td>
                  <td>{data[row].S3}</td>
                  <td>{data[row].S4}</td>
                  <td>{data[row].S5}</td>
                  <td>{data[row].CGPA}</td>
                  <td>{data[row].RS}</td>
                  {/*<td>{index}</td>*/}
                  {/* <td>{row.data.Name}</td> */}
                  <td>
                    <Link to={`/teacher/students/${data[row].RollNo}`}>
                      <button className="buttonclick1">View Profile</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    </div>
  );
}

export default Studentlist2;
