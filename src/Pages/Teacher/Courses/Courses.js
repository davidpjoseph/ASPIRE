import React, { useState } from "react";
import "../Timetable.css";
import ViewCourses from "./ViewCourses";
import CreateCourse from "./CreateCourse";
function Courses() {
  const [active, setActive] = useState("View");

  return (
    <div>
      <nav>
        <button onClick={() => setActive("Create")} className="time_button1">
          Add Course
        </button>
        <button onClick={() => setActive("View")} className="time_button2">
          View Course
        </button>
      </nav>
      <div>
        {active === "View" && <ViewCourses/>}
        {active === "Create" && <CreateCourse />}
      </div>
    </div>
  );
}

export default Courses;
