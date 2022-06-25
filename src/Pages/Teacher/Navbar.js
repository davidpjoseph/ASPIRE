import React from 'react'
import '../Navbar.css'
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ClassIcon from "@mui/icons-material/Class";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PsychologyIcon from "@mui/icons-material/Psychology";
import {
  NavLink,
} from "react-router-dom";
import { style } from '@mui/system';


function Navbar() {
  
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <NavLink to="course">
          <li className="row">
            <div id="icon">
              <LibraryBooksIcon />
            </div>
            <div id="title">Course</div>
          </li>
        </NavLink>
        <NavLink to="class" activeClassName="clicked">
          <li className="row">
            <div id="icon">
              <ClassIcon />
            </div>
            <div id="title">Class</div>
          </li>
        </NavLink>
        <NavLink to="counselling" activeClassName="clicked">
          <li className="row">
            <div id="icon">
              <PsychologyIcon />
            </div>
            <div id="title">Counselling</div>
          </li>
        </NavLink>
        <NavLink to="uploads" activeClassName="active">
          <li className="row">
            <div id="icon">
              <UploadFileIcon />
            </div>
            <div id="title">Uploads</div>
          </li>
        </NavLink>
        <NavLink to="timetableteach" activeClassName="active">
        <li className="row">
          <div id="icon">
            <EventNoteIcon />
          </div>
          <div id="title">Timetable</div>
        </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar