import React from 'react'
import '../Navbar.css'

import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import TimelineIcon from "@mui/icons-material/Timeline";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <NavLink to="students">
          <li className="row">
            <div id="icon">
              <GroupsIcon />
            </div>
            <div id="title">Students</div>
          </li>
        </NavLink>
        <NavLink to="attendance">
          <li className="row">
            <div id="icon">
              <AssignmentTurnedInIcon />
            </div>
            <div id="title">Attendance</div>
          </li>
        </NavLink>
        <NavLink to="performance">
          <li className="row">
            <div id="icon">
              <TimelineIcon />
            </div>
            <div id="title">Performance</div>
          </li>
        </NavLink>
        <NavLink to="counselling">
          <li className="row">
            <div id="icon">
              <PsychologyIcon />
            </div>
            <div id="title">Counselling</div>
          </li>
        </NavLink>
        <NavLink to="timetablehod" activeClassName="active">
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