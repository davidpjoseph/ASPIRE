import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Attendance.css";

const state = {
  chartData: {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "CS203",
        data: [77, 23],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgb(213,233,242)",
          "rgb(236, 137, 56)",
        ],
      },
    ],
  },
};

export default function Attendance2() {
  return (
    <div className="AT-card2 AT-margin AT-margin-top AT-white">
      <div className="AT-container AT-white">
        <h4>
          <b>Attendance: CS203</b>
        </h4>
        <div className="chart">
          <Doughnut data={state.chartData} options={{}} />
        </div>
      </div>
    </div>
  );
}
