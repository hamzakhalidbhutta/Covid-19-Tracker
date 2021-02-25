import React, { useState } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import styles from "./Cards.module.scss";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import CountUp from "react-countup";

const Cards = ({
  stats: { confirmed, recovered, deaths, lastUpdate },
  country = "around the world",
}) => {
  const [chart, setChart] = useState(true);

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
          text:
            country === "all"
              ? `Covid situation around the world`
              : `Covid situation in ${country}`,
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
    <div className={styles.cardsContainer}>
      {confirmed ? (
        <Card className={styles.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Statistics
            </Typography>

            {chart ? pieChart : dougnutChart}

            <Typography variant="body2" component="p">
              Infected
            </Typography>

            <Typography className={styles.pos} color="textSecondary">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>

            <Typography variant="body2" component="p">
              Recovered
            </Typography>

            <Typography className={styles.pos} color="textSecondary">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
                        <Typography variant="body2" component="p">
              Deaths
            </Typography>

            <Typography className={styles.pos} color="textSecondary">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
              Last Updated
              <br />
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              onClick={() => {
                setChart(!chart);
              }}
            >
              Change View
            </Button>
          </CardActions>
        </Card>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
};

export default Cards;
