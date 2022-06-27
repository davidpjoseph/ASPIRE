import React,{useState,useEffect} from "react";
import { RealtimeDataBright1 } from "../../../../components/List/Bright1";
import { RealtimeDataWeak1 } from "../../../../components/List/Weak1";
import {  RealtimeDataSingle1 } from "../../../../components/List/Single1";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { db } from "../../../../Firebase/Config";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  orderByKey,
  orderByValue,
  limitToFirst,
  endAt,
} from "firebase/database";


function Analysis1() {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const dbRef1 = ref(db, `Subject1/${id}`);
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
  console.log("data1", data1);
  useEffect(() => {
    const dbRef2 = query(ref(db, `Subject1/${id}`),orderByChild("internal1"),startAt(40),);
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
    const dbRef3 = query(
      ref(db, `Subject1/${id}`),
      orderByChild("internal1"),
      endAt(20)
    );
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
  
  
  
  return (
    <div>
      <Table className="single_sub1">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Roll No</th>
            <th>Name</th>
            <th>Attendance</th>
            <th>Internal1</th>
            <th>Internal2</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data1).map((row, index) => {
            return (
              <tr>
                <td>{data1[row].RollNo}</td>
                <td>{data1[row].Name}</td>
                <td>{data1[row].attendance}</td>
                <td>{data1[row].internal1}</td>
                <td>{data1[row].internal2}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <table className="stud_brightcourse">
          <tr colspan={5}>
            <th>
              <h2>Bright Students</h2>
            </th>
          </tr>
        </table>
        <Table className="stud_brightcourse">
          <tr>
            <th rowSpan={2}>Roll No.</th>
            <th rowSpan={2}>Student Name</th>
          </tr>
          <tbody>
            {Object.keys(data2).map((row, index) => {
              return (
                <tr>
                  <td>{data2[row].RollNo}</td>
                  <td>{data2[row].Name}</td>
                  {/*<td>{row.key}</td>
                            <td>{row.data.attendance}</td>
                            <td>{row.data.internal1}</td>
                            <td>{row.data.internal2}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <table className="stud_weak">
          <tr colspan={5}>
            <th>
              <h2>Slow Learners</h2>
            </th>
          </tr>
        </table>
        <Table className="stud_weak">
          <tr>
            <th rowSpan={2}>Roll No.</th>
            <th rowSpan={2}>Student Name</th>
          </tr>
          <tbody>
            {Object.keys(data3).map((row, index) => {
              return (
                <tr>
                  <td>{data3[row].RollNo}</td>
                  <td>{data3[row].Name}</td>
                  {/* <td>{row.data.Name}</td> 
                            <td>{row.data.attendance}</td>
                            <td>{row.data.internal1}</td>
                            <td>{row.data.internal2}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/*<div>
        <RealtimeDataSingle1 />
        <RealtimeDataBright1 />
        <RealtimeDataWeak1 />
          </div>*/}
    </div>
  );
}

export default Analysis1;
