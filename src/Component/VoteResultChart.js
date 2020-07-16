import React from "react";
import { Doughnut } from "react-chartjs-2";

export default ({ result }) => {
  return (
    <Doughnut
      data={{
        labels: result && result.map((el) => el.text),
        datasets: [
          {
            label: "My First Dataset",
            data: result && result.map((el) => el.result),
            backgroundColor: [
              "#5680e9",
              "#84ceeb",
              "#5ab9ea",
              "#c1c8e4",
              "#8860d0"
            ],
            borderWidth: 5,
            hoverBorderWidth: 5,
            hoverBorderColor: "white",
            hoverBackgroundColor: [
              "#5680e9",
              "#84ceeb",
              "#5ab9ea",
              "#c1c8e4",
              "#8860d0"
            ]
          }
        ]
      }}
      options={{
        cutoutPercentage: 80,
        legend: { display: false },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        tooltips: {
          enabled: false
        }
      }}
      width={250}
      height={100}
    />
  );
};
