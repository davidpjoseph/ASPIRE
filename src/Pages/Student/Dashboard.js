import React from "react";
import Internal1 from "../../components/Graphs/Internal1/Internal1";
import Uniexam from "../../components/Graphs/Uniexam/Uniexam";
import "./Dashboard.css";
import Studname from "./Studname";
function Dashboard() {
  return (
    <>
      <div className="dash_stud">
        <Studname />
      </div>
      <div className="dash_int">
        <Internal1 />
      </div>
      <div className="dash_uni">
        <Uniexam />
      </div>
    </>
  );
}

export default Dashboard;
