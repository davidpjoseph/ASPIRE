import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  NavLink,
  Outlet,
} from "react-router-dom";

function Hod() {
  return (
    <div className="hod">
      <Topbar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Hod