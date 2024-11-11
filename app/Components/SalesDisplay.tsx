"use client";
import React from "react";

//Components
import DropDown from "./DropDown";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { TooltipItem } from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Complete",
      data: [
        1500, 2000, 3000, 2500, 2800, 3200, 4000, 4200, 3100, 2900, 3600, 4800,
      ],
      backgroundColor: "rgba(99, 102, 241, 0.5)", // Soft blue with opacity
      borderColor: "rgba(99, 102, 241, 1)", // Solid blue for borders
      borderWidth: 1,
      borderRadius: 8, // Rounded corners
    },
    {
      label: "Pending",
      data: [
        1000, 1800, 2500, 2300, 2100, 3000, 3500, 3800, 2700, 2600, 3400, 4500,
      ],
      backgroundColor: "rgba(251, 146, 60, 0.5)", // Soft orange with opacity
      borderColor: "rgba(251, 146, 60, 1)", // Solid orange for borders
      borderWidth: 1,
      borderRadius: 8, // Rounded corners
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true, // Use circle for legend markers
        pointStyle: "circle", // Specify circle shape
      },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem: TooltipItem<'bar'>) {
          return `$${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function SalesDisplay() {
  return (
    <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-md w-[70vw] sm:w-[70vw] md:w-[38vw] lg:w-[41vw] xl:w-[36vw] 2xl:w-[31vw] overflow-x-hidden overflow-y-hidden">
      <div className="flex justify-between items-center w-full">
        <p className="text-md">Sales Analytics</p>
        <DropDown />
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
