// Import the necessary modules from Chart.js
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";

// Register the components
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const InflowOutflowChart = () => {
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
        label: "Inflow",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Outflow",
        data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
        borderColor: "red",
        fill: false,
      },
    ],
  };

  return (
    <div className="mb-4">
      <Line data={data} />
    </div>
  );
};

export default InflowOutflowChart;
