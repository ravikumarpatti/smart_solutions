import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

const MonthlyUsageChart = () => {
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
        label: "Monthly Water Usage (KL)",
        data: [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850],
        borderColor: "green",
        fill: false,
      },
    ],
  };

  return (
    <div className="mb-4">
      <Typography variant="h6">Monthly Water Usage</Typography>
      <Line data={data} />
    </div>
  );
};

export default MonthlyUsageChart;
