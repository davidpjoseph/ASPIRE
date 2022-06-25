import React from 'react'
import Navbar from '../../Pages/Teacher/Navbar'
import Topbar from '../../components/Topbar/Topbar'
import Courses from './Courses/ViewCourses'
import Input from './Input/Input'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  NavLink,
  Outlet,
} from "react-router-dom";


function Teacher() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet/>
      
    </div>
  );
}

export default Teacher