import './App.css';


import { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,Routes,Switch
} from "react-router-dom";

import React from 'react';
import Login from './Pages/Login/Login';
import Topbar from './components/Topbar/Topbar';
import Student from './Pages/Student/Student';
import Teacher from './Pages/Teacher/Teacher';
import Counsellor from './Pages/Counsellor/Counsellor';
import Hod from './Pages/HOD/Hod';
import Signup from "./Pages/Login/Signup";
import Performance from './Pages/Student/Performance';
import Classlist from './Pages/Teacher/Class/Classlist'
import Courses from './Pages/Teacher/Courses/Courses';
import Input from './Pages/Teacher/Input/Input';
import {RealtimeData} from './Pages/Teacher/Input/Input2';
import Studentlist from './components/List/Studentlist';
import Results from './components/List/Results';
import Attendmain from './Pages/Student/Attendmain';
import {Attendance1} from './components/List/Attendance';
import Dashboard from "./Pages/Student/Dashboard";
import Analysis from './Pages/Teacher/Courses/Analysis/Analysis1';
import Studsignup from './Pages/Login/Studsignup';
import Teachsignup from './Pages/Login/Teachsignup';
import Hodsignup from './Pages/Login/Hodsignup';
import Counsignup from './Pages/Login/Counsignup';
import SignIn from './Pages/Login/SignIn'
import Studentoverall from './components/List/Studentoverall';
import Counselling from './Pages/HOD/Counselling';
import Counselling1 from './Pages/Teacher/Counselling1';
import StudentCoun from './Pages/Teacher/StudentCoun';
import StudentCoun2 from './Pages/Counsellor/StudentCoun2';
import CardStudent from './Pages/Counsellor/CardStudent';
import Classlist2 from './Pages/HOD/Classlist2';
import Analysis1 from './Pages/Teacher/Courses/Analysis/Analysis1';
import Analysis2 from './Pages/Teacher/Courses/Analysis/Analysis2';
import Studentlist2 from './components/List/Studentlist2';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="studentsignup" element={<Studsignup />} />
          <Route path="teachersignup" element={<Teachsignup />} />
          <Route path="hodsignup" element={<Hodsignup />} />
          <Route path="counsellorsignup" element={<Counsignup />} />

          <Route path="student" element={<Student />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendance" element={<Attendmain />} />
            <Route path="performance" element={<Performance />} />
          </Route>

          <Route path="teacher" element={<Teacher />}>
            <Route path="course" element={<Courses />} />
            <Route path="course/analysis1" element={<Analysis1 />} />
            <Route path="course/analysis2" element={<Analysis2 />} />
            <Route path="uploads" element={<Input />} />
            <Route path="students/:id" element={<StudentCoun />} />
            <Route path="class" element={<Classlist />} />
            <Route path="counselling" element={<Counselling1 />} />
          </Route>

          <Route path="counsellor" element={<Counsellor />}>
            <Route path="dashboard" element={<CardStudent />} />
            <Route path="students/:id" element={<StudentCoun2 />} />
          </Route>

          <Route path="hod" element={<Hod />}>
            <Route path="students" element={<Studentlist2 />} />
            <Route path="students/:id" element={<Studentoverall />} />
            <Route path="attendance" element={<Attendance1 />} />
            <Route path="performance" element={<Classlist2 />} />
            <Route path="counselling" element={<Counselling />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
