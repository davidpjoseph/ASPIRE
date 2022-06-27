import "./Form.css";
import React from "react";
import "../Graphs/Internal1/Internal1.css";
import "../Graphs/Uniexam/Uniexam.css";
import { useUserAuth } from "../../Context/userAuthContext";
import {
  ref,
  onValue,
} from "firebase/database";
import { db } from "../../Firebase/Config";
import { Table } from "react-bootstrap";
import {useState,useEffect} from "react"

function Studentoverall1() {
  
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const { user } = useUserAuth();
  const useremail = user.email;
  const bright="jenniferjohn@gmail.com";
  const weak="jasminjames544@gmail.com";
  
   useEffect(() => {
     if (useremail === weak) {
      const dbRef1 = ref(db, "Mark1/6");
    onValue(dbRef1, (snapshot) => {
      if (snapshot.val() != null) {
        setData1({ ...snapshot.val() });
      } else {
        setData1({});
      }
    });
    return () => {
      setData1({});
    };}
     if (useremail === bright) {
      const dbRef1 =ref(db, "Mark1/7");
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
    }
    else{
       const dbRef1 = ref(db, "Mark1/3");
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
    }
  }, []);
  console.log("student",data1);
  
  useEffect(() => {
    if (useremail === weak) {
    const dbRef2 =ref(db, "Mark2/6");
      onValue(dbRef2, (snapshot) => {
      if (snapshot.val() != null) {
        setData2({ ...snapshot.val() });
      } else {
        setData2({});
      }
    });
    return () => {
      setData2({});
    };}
    if (useremail === bright) {
      const dbRef2 =ref(db, "Mark2/7");
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
    }
    else{
      const dbRef2 = ref(db, "Mark2/3");
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
    }
  }, []);

  useEffect(() => {
    if (useremail === bright) {
    const dbRef3 =ref(db, "Grade/7");
    onValue(dbRef3, (snapshot) => {
      if (snapshot.val() != null) {
        setData3({ ...snapshot.val() });
      } else {
        setData3({});
      }
    });
    return () => {
      setData3({});
    };}
     if (useremail === weak) {
       const dbRef3 = ref(db, "Grade/6");
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
     }
     else{
       const dbRef3 = ref(db, "Grade/3");
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
     }
  }, []);
    return (
      <>
        <Table className="single">
          <thead>
            <tr>
              {/* <th>#</th> */}

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
                  {/* <td>{row.data.Name}</td> */}
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
                  <td className="row2"></td>
                  {/* <td>{row.data.Name}</td> */}
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
              <th className="row4">End Semester</th>
              <th className="row4">S1</th>
              <th className="row4">S2</th>
              <th className="row4">S3</th>
              <th className="row4">S4</th>
              <th className="row4">S5</th>
              <th className="row4">Supply</th>
            </tr>
          </thead>
          <tbody>
            
              
                <tr>
                  {/*<td>{index}</td>*/}
                  <td></td>
                  {/* <td>{row.data.Name}</td> */}

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
        
      </>
    );
  }
  
export default Studentoverall1;