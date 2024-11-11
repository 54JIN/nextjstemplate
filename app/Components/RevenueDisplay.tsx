"use client";
import React from "react";

//Components
import DropDown from "./DropDown";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // To enable the fill below the line
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue",
      data: [120000, 125000, 140000, 130000, 160000, 150000],
      borderColor: "#6366F1", // Line color
      backgroundColor: "rgba(99, 102, 241, 0.2)", // Fill color
      borderWidth: 2,
      pointBackgroundColor: "#ffffff", // Color of the points
      pointBorderColor: "#6366F1",
      pointBorderWidth: 2,
      pointRadius: 5, // Size of the points
      fill: true, // Enable fill below the line
      tension: 0.4, // Smooth curve effect
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export default function RevenueDisplay() {
  return (
    <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-md w-[70vw] sm:w-[70vw] md:w-[38vw] lg:w-[41vw] xl:w-[25vw] 2xl:w-[28vw] overflow-x-hidden overflow-y-hidden">
      <div className="flex justify-between items-center">
        <p className="text-md">Revenue</p>
        <DropDown />
      </div>
      <h3 className="text-2xl font-semibold">$172,609.82</h3>
      <Line data={data} options={options} />
    </div>
  );
}
