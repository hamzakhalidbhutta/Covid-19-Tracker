import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const Cards = ({ stats: { confirmed, recovered, deaths, lastUpdate } }) => {
  const pieChart = confirmed ? (
    <Pie
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Covid situation around the world",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: "Covid situation around the world",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  ) : null;

  const dougnutChart = confirmed ? (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Covid situation around the world",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: "Covid situation around the world",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  ) : null;
  return (
    <div className="cardsContainer">
      {pieChart}
      {dougnutChart}
    </div>
  );
};

export default Cards;