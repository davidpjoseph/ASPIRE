import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./Uniexam.css";
import { ref, onValue } from "firebase/database";
import { db } from "../../../Firebase/Config";
import { useUserAuth } from "../../../Context/userAuthContext";

export default function Uniexam() {
  const { user } = useUserAuth();
  const useremail = user.email;
  const bright = "jenniferjohn@gmail.com";
  const weak = "jasminjames544@gmail.com";
  const [data, setData] = useState({});
  useEffect(() => {
    if (useremail === weak) {
      const dbRef1 = ref(db, `Grade/6`);
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
    }
    if (useremail === bright) {
      const dbRef1 = ref(db, `Grade/7`);
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
    } else {
      const dbRef1 = ref(db, `Grade/3`);
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
    }
  }, []);
  console.log("user", data);

  return (
    <div className="P-card P-margin P-margin-top P-white">
      <div className="P-container P-white">
        <h4>
          <b>Grade Report</b>
        </h4>
        <div className="chart">
          <Line
            data={{
              labels: ["S1", "S2", "S3", "S4", "S5"],
              datasets: [
                {
                  label: "SGPA",
                  data: [data.S1, data.S2, data.S3, data.S4, data.S5, 0, 10],
                  borderColor: "rgba(22,98,208,0.6)",
                  fill: true,
                  backgroundColor: "rgb(213,233,242)",
                },
              ],
            }}
            options={{}}
          />
        </div>
      </div>
    </div>
  );
}
