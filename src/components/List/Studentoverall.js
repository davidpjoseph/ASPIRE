import "./Form.css";
import React,{useState,useEffect} from "react";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  orderByValue,
  query,
  equalTo,
} from "firebase/database";
import {useParams} from 'react-router-dom'
import { Table } from "react-bootstrap";
import { db } from "../../Firebase/Config";
function Studentoverall() {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});

  const {id}=useParams();
  useEffect(() => {
    const dbRef1 = 
      ref(db, `Mark1/${id}`);
    onValue(dbRef1, (snapshot) => {
      if (snapshot.val() != null) {
        setData1({ ...snapshot.val() });
      } else {
        setData1({});
      }
    });
    return () => {
      setData1({});
    };
  }, [id]);
  console.log("user",data1)
  useEffect(() => {
    const dbRef2 = ref(db, `Mark2/${id}`);
    onValue(dbRef2, (snapshot) => {
      if (snapshot.val() != null) {
        setData2({ ...snapshot.val() });
      } else {
        setData2({});
      }
    });
    return () => {
      setData2({});
    };
  }, [id]);
   console.log("data2", data2);
  useEffect(() => {
    const dbRef3 = ref(db, `Grade/${id}`);
    onValue(dbRef3, (snapshot) => {
      if (snapshot.val() != null) {
        setData3({ ...snapshot.val() });
      } else {
        setData3({});
      }
    });
    return () => {
      setData3({});
    };
  }, [id]);
console.log("grade",data3)
  return (
    <Table className="single">
      <thead>
        <tr>
          {/* <th>#</th> */}

          <th></th>
          <th></th>
          <th className="row1">Internals</th>
          <th className="row1">CS201</th>
          <th className="row1">CS203</th>
          <th className="row1">CS205</th>
          <th className="row1">CS207</th>
          <th className="row1">CS209</th>
          <th className="row1">CS265</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/*<td>{index}</td>*/}
          <td></td>
          {/*<td>{row.data.Name}</td> */}
          <td></td>
          <td>Internal 1</td>
          <td>{data1.cs201}</td>
          <td>{data1.cs203}</td>
          <td>{data1.cs205}</td>
          <td>{data1.cs207}</td>
          <td>{data1.cs209}</td>
          <td>{data1.cs265}</td>
        </tr>
      </tbody>

      <thead>
        {/*<tr>
            <th>#</th> 
            <th>Name</th>
            <th>cs201</th>
            <th>cs203</th>
            <th>cs205</th>
            <th>cs207</th>
            <th>cs209</th>
            <th>cs265</th>
          </tr> */}
      </thead>
      <tbody>
        <tr>
          {/*<td>{index}</td>*/}
          <td></td>
          <td className="row2">{data2.Name}</td>

          <td>Internal 2</td>
          <td>{data2.cs201}</td>
          <td>{data2.cs203}</td>
          <td>{data2.cs205}</td>
          <td>{data2.cs207}</td>
          <td>{data2.cs209}</td>
          <td>{data2.cs265}</td>
        </tr>
      </tbody>

      <thead>
        <tr className="row3">
          {/* <th>#</th> */}
          <th></th>
          <th></th>
          <th className="row1">End Semester</th>
          <th className="row1">S1</th>
          <th className="row1">S2</th>
          <th className="row1">S3</th>
          <th className="row1">S4</th>
          <th className="row1">S5</th>
          <th className="row1">Supply</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/*<td>{index}</td>*/}
          <td></td>
          {/* <td>{row.data.Name}</td> */}
          <td></td>
          <td>SGPA</td>
          <td>{data3.S1}</td>
          <td>{data3.S2}</td>
          <td>{data3.S3}</td>
          <td>{data3.S4}</td>
          <td>{data3.S5}</td>
          <td>{data3.RS}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Studentoverall;