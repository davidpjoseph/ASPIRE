import React from 'react'
import "../../components/List/Form.css"
import {useState} from 'react'
import {Button} from "@progress/kendo-react-buttons";
import { db } from "../../Firebase/Config";
import { ref, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function TimetableCreate() {
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const navigate = useNavigate();
    const[year1subject1,setYear1Subject1]=useState("");const[year1subject2,setYear1Subject2]=useState("");
    const[year1subject3,setYear1Subject3]=useState("");const[year3subject1,setYear3Subject1]=useState("");
    const[year1subject4,setYear1Subject4]=useState("");const[year3subject2,setYear3Subject2]=useState("");
    const[year2subject1,setYear2Subject1]=useState("");const[year3subject3,setYear3Subject3]=useState("");
    const[year2subject2,setYear2Subject2]=useState("");const[year3subject4,setYear3Subject4]=useState("");
    const[year2subject3,setYear2Subject3]=useState("");const[year4subject4,setYear4Subject4]=useState("");
    const[year2subject4,setYear2Subject4]=useState("");const[year4subject3,setYear4Subject3]=useState("");
    const[year4subject1,setYear4Subject1]=useState("");const[year4subject2,setYear4Subject2]=useState("");
    const notify = () =>
      toast.success("Timetable Created Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    
    function Unapproved(){
      set(ref(db, "Unapproved/"), {
        date1:date1,
        date2:date2,
        year1subject1:year1subject1,
        year1subject3:year1subject3,
        year1subject4:year1subject4,
        year2subject1:year2subject1,
        year2subject2:year2subject2,
        year2subject3:year2subject3,
        year2subject4:year2subject4,
        year4subject1:year4subject1,
        year1subject2:year1subject2,
        year3subject1:year3subject1,
        year3subject2:year3subject2,
        year3subject3:year3subject3,
        year3subject4:year3subject4,
        year4subject4:year4subject4,
        year4subject3:year4subject3,
        year4subject2:year4subject2,
      });
    }
    const handleSubmit=async(e)=> {
        e.preventDefault();
        Unapproved();
        notify();
    }


return (
  <div>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
      <div className="timetablebox">
        <h1>Remedial Timetable</h1>
        <div className="input-box">
          <span className="details"> With Effect from </span>
          <input
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
            placeholder="dd-mm-yyyy"
            required
          ></input>
          <span className="details"> to </span>
          <input
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
            placeholder="dd-mm-yyyy"
            required
          ></input>
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
            <td>
              <input
                value={year1subject1}
                onChange={(e) => setYear1Subject1(e.target.value)}
                placeholder="Subject1"
              ></input>
            </td>
            <td>
              <input
                value={year1subject2}
                onChange={(e) => setYear1Subject2(e.target.value)}
                placeholder="Subject2"
              ></input>
            </td>
            <td>
              <input
                value={year1subject3}
                onChange={(e) => setYear1Subject3(e.target.value)}
                placeholder="Subject3"
              ></input>
            </td>
            <td>
              <input
                value={year1subject4}
                onChange={(e) => setYear1Subject4(e.target.value)}
                placeholder="Subject4"
              ></input>
            </td>
          </tr>

          <tr>
            <th>II</th>
            <td>
              <input
                value={year2subject1}
                onChange={(e) => setYear2Subject1(e.target.value)}
                placeholder="Subject1"
              ></input>
            </td>
            <td>
              <input
                value={year2subject2}
                onChange={(e) => setYear2Subject2(e.target.value)}
                placeholder="Subject2"
              ></input>
            </td>
            <td>
              <input
                value={year2subject3}
                onChange={(e) => setYear2Subject3(e.target.value)}
                placeholder="Subject3"
              ></input>
            </td>
            <td>
              <input
                value={year2subject4}
                onChange={(e) => setYear2Subject4(e.target.value)}
                placeholder="Subject4"
              ></input>
            </td>
          </tr>

          <tr>
            <th>III</th>
            <td>
              <input
                value={year3subject1}
                onChange={(e) => setYear3Subject1(e.target.value)}
                placeholder="Subject1"
              ></input>
            </td>
            <td>
              <input
                value={year3subject2}
                onChange={(e) => setYear3Subject2(e.target.value)}
                placeholder="Subject2"
              ></input>
            </td>
            <td>
              <input
                value={year3subject3}
                onChange={(e) => setYear3Subject3(e.target.value)}
                placeholder="Subject3"
              ></input>
            </td>
            <td>
              <input
                value={year3subject4}
                onChange={(e) => setYear3Subject4(e.target.value)}
                placeholder="Subject4"
              ></input>
            </td>
          </tr>

          <tr>
            <th>IV</th>
            <td>
              <input
                value={year4subject1}
                onChange={(e) => setYear4Subject1(e.target.value)}
                placeholder="Subject1"
              ></input>
            </td>
            <td>
              <input
                value={year4subject2}
                onChange={(e) => setYear4Subject2(e.target.value)}
                placeholder="Subject2"
              ></input>
            </td>
            <td>
              <input
                value={year4subject3}
                onChange={(e) => setYear4Subject3(e.target.value)}
                placeholder="Subject3"
              ></input>
            </td>
            <td>
              <input
                value={year4subject4}
                onChange={(e) => setYear4Subject4(e.target.value)}
                placeholder="Subject4"
              ></input>
            </td>
          </tr>
        </table>
        <div className="input-box button">
          <input type="submit" value="Create"></input>
        </div>
      </div>
    </form>
  </div>
);
}

export default TimetableCreate;
