import React, { useState, useEffect } from "react";
import "./Comment.css";
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
const Notes = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
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

  function writeMessage() {
    set(ref(db, "Notes/" + id), {
      rollno: id,
      message: message,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    writeMessage();
    navigate("/counsellor/dashboard");
  };

  return (
    <>
      <div className="CT-card CT-margin CT-margin-top CT-white">
        <div className="CT-container CT-white">
          <form className="form1" onSubmit={handleSubmit}>
            <label>
              <h1>Notes</h1>
            </label>
            <label>
              <h3>
                Name: <b>{data.Name}</b>
              </h3>
            </label>
            <textarea
              placeholder="Write notes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Notes;