import React, { useState, useEffect } from "react";
import {Bar} from 'react-chartjs-2';
import './Internal1.css';
import {
  ref,
  onValue
} from "firebase/database";
import { db } from "../../../Firebase/Config";
import { useUserAuth } from "../../../Context/userAuthContext";


function Internal1()
{
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const { user } = useUserAuth();
  const useremail = user.email;
  const bright = "jenniferjohn@gmail.com";
  const weak = "jasminjames544@gmail.com";
  useEffect(() => {
     if (useremail === weak) {
    const dbRef1 =ref(db, `Mark1/6`);
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
  if (useremail === bright) {
    const dbRef1 = ref(db, `Mark1/7`);
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
     const dbRef1 = ref(db, `Mark1/3`);
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
  console.log("user", data1);
  useEffect(() => {
    if (useremail === weak) {
    const dbRef2 = ref(db, `Mark2/6`);
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
      const dbRef2 = ref(db, `Mark2/7`);
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
    else {
      const dbRef2 = ref(db, `Mark2/3`);
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
   
  
  return (
     
    <div className="I1-card I1-margin I1-margin-top I1-white">
      <div className="I1-container I1-white">
        <h4><b>Internal Assessment</b></h4>
      <div className="chart">
        <Bar
          data={{
                labels: ["CS201", "CS203", "CS205", "CS207", "CS209", "CS265"],
                datasets: [
                  {
                    label: "Internal 1",
                    data: [
                      data1.cs201,
                      data1.cs203,
                      data1.cs205,
                      data1.cs207,
                      data1.cs209,
                      data1.cs265,
                      0,
                      50,
                    ],
                    backgroundColor: [
                      "rgba(22,98,208,0.6)",
                      "rgba(22,98,208,0.6)",
                      "rgba(22,98,208,0.6)",
                      "rgba(22,98,208,0.6)",
                      "rgba(22,98,208,0.6)",
                      "rgba(22,98,208,0.6)",
                    ],
                  },
                  {
                    label: "Internal 2",
                    data: [
                      data2.cs201,
                      data2.cs203,
                      data2.cs205,
                      data2.cs207,
                      data2.cs209,
                      data2.cs265,
                      0,
                      50,
                    ],
                    backgroundColor: [
                      "rgb(73,85,137)",
                      "rgb(73,85,137)",
                      "rgb(73,85,137))",
                      "rgb(73,85,137)",
                      "rgb(73,85,137)",
                      "rgb(73,85,137)",
                    ],
                  },
                ],
              }}
        />
      </div>
      </div>
      </div>
      
      
    );
  }


  export default Internal1;
