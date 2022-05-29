import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Attendance.css";

const state = {
  chartData: {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [84, 6],
        backgroundColor: [
          "rgba(22,98,208,0.6)",
          "rgb(213,233,242)",
          "rgb(236, 137, 56)",
        ],
      },
    ],
  },
};

export default function Attendance3() {
  return (
    <div className="AT-card3 AT-margin AT-margin-top AT-white">
      <div className="AT-container AT-white">
        <h4>
          <b>Attendance: CS205</b>
        </h4>
        <div className="chart">
          <Doughnut data={state.chartData} options={{}} />
        </div>
      </div>
    </div>
  );
}
