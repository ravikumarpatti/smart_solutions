import { Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";

const DailyUsageChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Water Usage (KL)",
        data: [12, 19, 10, 17, 12, 18, 14],
        backgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="mb-4">
      <Typography variant="h6">Average Daily Usage</Typography>
      <Bar data={data} />
    </div>
  );
};

export default DailyUsageChart;
