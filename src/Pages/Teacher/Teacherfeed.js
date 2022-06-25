import React, { useState, useEffect } from "react";
import "../Counsellor/Comment.css";
import { db } from "../../Firebase/Config";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  ref,
  set,
  onValue,
  orderByChild,
  query,
  startAt,
  remove,
} from "firebase/database";

const Teacherfeed = () => {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dbRef1 = ref(db, `Mark1/${id}`);
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
  }, [id]);
  useEffect(() => {
    const dbRef1 = ref(db, `Feedback/${id}`);
    onValue(dbRef1, (snapshot) => {
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

  const Close = () => {
    navigate("/teacher/counselling");
  };

  return (
    <>
      <div className="CT-card CT-margin CT-margin-top CT-white">
        <div className="CT-container CT-white">
          <label>
            <h1>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Feedback</h1>
            <br></br>
          </label>
          <label>
            <h3>
              Name: <b>{data.Name}</b>
            </h3>
          </label>
          <br></br>
          <div class="boxfeed">
            <h3>{data2.message}</h3>
          </div>
          <button className="close" onClick={() => Close()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Teacherfeed;
