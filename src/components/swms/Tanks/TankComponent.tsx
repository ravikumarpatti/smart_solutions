import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LiquidFillTankComponent from "../../components/swms/LiquidFillTankComponent";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface WaterQualityData {
  pH: number;
  turbidity: number;
  temperature: number;
  dissolvedOxygen: number;
  status: string;
}

const mockWaterQualityData: WaterQualityData = {
  pH: 7.2,
  turbidity: 1.5,
  temperature: 22.5,
  dissolvedOxygen: 6.8,
  status: "Good",
};

const TanksComponent: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>("daily");
  const [graphType, setGraphType] = useState<string>("inflow");
  const [chartType, setChartType] = useState<string>("line");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [waterQuality] = useState<WaterQualityData>(mockWaterQualityData);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTimeRangeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setTimeRange(event.target.value as string);
  };

  const handleGraphTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newGraphType: string | null
  ) => {
    if (newGraphType !== null) {
      setGraphType(newGraphType);
    }
  };

  const handleChartTypeToggle = () => {
    setChartType(chartType === "line" ? "bar" : "line");
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      cardRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleDownloadChart = () => {
    const chartCanvas = document.querySelector("canvas");
    if (chartCanvas) {
      const link = document.createElement("a");
      link.href = chartCanvas.toDataURL("image/png");
      link.download = "chart.png";
      link.click();
    }
  };

  // Mock Data
  const data = {
    daily: {
      inflow: [10, 12, 14, 11, 9, 10, 12],
      outflow: [8, 9, 10, 7, 8, 9, 10],
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    weekly: {
      inflow: [70, 65, 80, 75],
      outflow: [60, 55, 70, 65],
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    monthly: {
      inflow: [300, 320, 310],
      outflow: [280, 290, 300],
      labels: ["January", "February", "March"],
    },
  };

  const selectedData = data[timeRange as keyof typeof data];
  const chartData = {
    labels: selectedData.labels,
    datasets: [
      {
        label: graphType === "inflow" ? "Inflow (KL)" : "Outflow (KL)",
        data:
          graphType === "inflow" ? selectedData.inflow : selectedData.outflow,
        borderColor: graphType === "inflow" ? "blue" : "red",
        backgroundColor:
          graphType === "inflow"
            ? "rgba(0, 0, 255, 0.2)"
            : "rgba(255, 0, 0, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ margin: "8px 0px" }}>
        Tank Overview
      </Typography>
      <Grid container spacing={2}>
        {/* Water Quality Sensor */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card sx={{ width: "45%" }}>
            <CardContent>
              <Typography variant="h5">Water Quality Analysis</Typography>
              <Typography variant="body1">pH: {waterQuality.pH}</Typography>
              <Typography variant="body1">
                Turbidity: {waterQuality.turbidity} NTU
              </Typography>
              <Typography variant="body1">
                Temperature: {waterQuality.temperature} °C
              </Typography>
              <Typography variant="body1">
                Dissolved Oxygen: {waterQuality.dissolvedOxygen} mg/L
              </Typography>
              <Typography variant="body1">
                Status: {waterQuality.status}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: "50%" }}>
            <CardContent>
              <Typography variant="h5">Water Level Analysis</Typography>
              <Typography variant="body1">pH: {waterQuality.pH}</Typography>
              <Typography variant="body1">
                Turbidity: {waterQuality.turbidity} NTU
              </Typography>
              <Typography variant="body1">
                Temperature: {waterQuality.temperature} °C
              </Typography>
              <Typography variant="body1">
                Dissolved Oxygen: {waterQuality.dissolvedOxygen} mg/L
              </Typography>
              <Typography variant="body1">
                Status: {waterQuality.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card ref={cardRef}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" sx={{ mb: { xs: 2, md: 0 } }}>
                  {graphType === "inflow" ? "Inflow" : "Outflow"} Graph
                </Typography>

                <FormControl
                  sx={{
                    minWidth: 150,
                    mb: { xs: 2, md: 0 },
                  }}
                  variant="outlined"
                >
                  <Select
                    value={timeRange}
                    onChange={(e: any) => handleTimeRangeChange(e)}
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                  </Select>
                </FormControl>

                <ToggleButtonGroup
                  sx={{ mb: { xs: 2, md: 0 } }}
                  value={graphType}
                  exclusive
                  onChange={handleGraphTypeChange}
                  aria-label="graph type"
                >
                  <ToggleButton value="inflow" aria-label="inflow">
                    <TrendingUpIcon
                      sx={{
                        marginRight: "5px",
                        color: "blue",
                      }}
                    />{" "}
                    Inflow
                  </ToggleButton>
                  <ToggleButton value="outflow" aria-label="outflow">
                    <TrendingDownIcon
                      sx={{ marginRight: "5px", color: "red" }}
                    />{" "}
                    Outflow
                  </ToggleButton>
                </ToggleButtonGroup>

                <Box>
                  <IconButton
                    onClick={handleChartTypeToggle}
                    aria-label="toggle chart type"
                  >
                    {chartType === "line" ? (
                      <BarChartIcon />
                    ) : (
                      <ShowChartIcon />
                    )}
                  </IconButton>
                  <IconButton
                    onClick={handleFullScreenToggle}
                    aria-label="toggle fullscreen"
                  >
                    {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                  </IconButton>
                  <IconButton
                    onClick={handleDownloadChart}
                    aria-label="download chart"
                  >
                    <FileDownloadIcon />
                  </IconButton>
                </Box>
              </Box>

              {chartType === "line" ? (
                <Line data={chartData} />
              ) : (
                <Bar data={chartData} />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TanksComponent;
