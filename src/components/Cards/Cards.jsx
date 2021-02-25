import React from "react";
// import { Button } from '@material-ui/core';
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
  ) : (
    "Loading..."
  );

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
  ) : (
    "Loading..."
  );
  return (
    <div className="cardsContainer">
      {/* <Button variant="outlined" color="secondary">
        Secondary
      </Button> */}
      {pieChart}

      {dougnutChart}
    </div>
  );
};

export default Cards;
