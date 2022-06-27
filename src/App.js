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
import {RealtimeData} from './Pages/Teacher/Input/Input3';
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
import Studentlist3 from './components/List/Studentlist3';
import TimetableCreate from './Pages/Teacher/TimetableCreate';
import Timetablehod from './Pages/HOD/Timetablehod';
import Timetablestud from './Pages/Student/Timetablestud';
import Timetable from './Pages/Teacher/Timetable';
import Comment from './Pages/Counsellor/Comment';
import Notes from './Pages/Counsellor/Notes';
import Viewfeed from './Pages/Counsellor/Viewfeed';
import Viewnotes from './Pages/Counsellor/Viewnotes';
import Teacherfeed from './Pages/Teacher/Teacherfeed';
import Mainanalysis from './Pages/Teacher/Courses/Analysis/Mainanalysis';
import Inputmain from './Pages/Teacher/Input/Inputmain';
import Studenthod from './Pages/HOD/Studenthod';
import Attendhod from './Pages/HOD/Attendhod';
import Counselhod from './Pages/HOD/Counselhod';

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
            <Route path="timetablestud" element={<Timetablestud />} />
          </Route>

          <Route path="teacher" element={<Teacher />}>
            <Route path="course" element={<Courses />} />
            <Route path="analysis/:id" element={<Analysis1 />} />
            <Route path="uploads" element={<Inputmain />} />
            <Route path="students/:id" element={<StudentCoun />} />
            <Route path="feedback/:id" element={<Teacherfeed />} />
            <Route path="class" element={<Classlist />} />
            <Route path="counselling" element={<Counselling1 />} />
            <Route path="timetableteach" element={<Timetable />} />
          </Route>

          <Route path="hod" element={<Hod />}>
            <Route path="students" element={<Studenthod />} />
            <Route path="students/:id" element={<Studentoverall />} />
            <Route path="attendance" element={<Attendhod />} />
            <Route path="performance" element={<Classlist2 />} />
            <Route path="counselling" element={<Counselhod />} />
            <Route path="timetablehod" element={<Timetablehod />} />
          </Route>

          <Route path="counsellor" element={<Counsellor />}>
            <Route path="dashboard" element={<CardStudent />} />
            <Route path="students/:id" element={<StudentCoun2 />} />
            <Route path="feedback/:id" element={<Comment />} />
            <Route path="notes/:id" element={<Notes />} />
            <Route path="view/:id" element={<Viewfeed />} />
            <Route path="viewnotes/:id" element={<Viewnotes />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
