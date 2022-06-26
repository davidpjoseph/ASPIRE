import React, { useState } from "react";
import "../Timetable.css";
import Input from "./Input";
import Input1 from"./Input1";
function Inputmain() {
  const [active, setActive] = useState("Class");

  return (
    <div>
      <nav>
        <button onClick={() => setActive("Class")} className="time_button1">
          Class
        </button>
        <button onClick={() => setActive("Course")} className="time_button2">
          Course
        </button>
      </nav>
      <div>
        {active === "Class" && <Input />}
        {active === "Course" && <Input1 />}
      </div>
    </div>
  );
}

export default Inputmain;
