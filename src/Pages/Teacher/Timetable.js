import React,{useState} from 'react'
import "./Timetable.css"
import ViewTimetable from './ViewTimetable';
import TimetableCreate from './TimetableCreate';
function Timetable() {
  const[active,setActive]=useState("Create");

  return (
    <div>
      <nav>
        <button onClick={() => setActive("Create")} className="time_button1">
          Create Timetable
        </button>
        <button onClick={() => setActive("View")} className="time_button2">
          View Timetable
        </button>
      </nav>
      <div>
        {active === "Create" && <TimetableCreate />}
        {active === "View" && <ViewTimetable />}
      </div>
    </div>
  );
}

export default Timetable