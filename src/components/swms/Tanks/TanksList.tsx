import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Slider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CloseIcon from "@mui/icons-material/Close";
import TanksComponent from "./TankComponent";
import WaterContainer from "./WaterAnimation";

interface WaterQualityData {
  id: number;
  location: string;
  pH: number;
  turbidity: number;
  temperature: number;
  dissolvedOxygen: number;
  status: string;
  maxWaterLevel: number;
  minWaterLevel: number;
  capacity: number;
  level: number;
}

const mockWaterQualityData: WaterQualityData[] = [
  {
    id: 1,
    location: "Tank A",
    pH: 7.2,
    turbidity: 1.5,
    temperature: 22.5,
    dissolvedOxygen: 6.8,
    status: "Good",
    maxWaterLevel: 100, // Percentage
    minWaterLevel: 30, // Percentage
    capacity: 500, // Capacity in liters (remains unchanged)
    level: 58, // Water level as a percentage
  },
  {
    id: 2,
    location: "Tank B",
    pH: 7.0,
    turbidity: 1.8,
    temperature: 24.0,
    dissolvedOxygen: 6.5,
    status: "Moderate",
    maxWaterLevel: 90, // Percentage
    minWaterLevel: 25, // Percentage
    capacity: 450, // Capacity in liters (remains unchanged)
    level: 65, // Water level as a percentage
  },
];

const TankList: React.FC = () => {
  const [waterQuality, setWaterQuality] =
    useState<WaterQualityData[]>(mockWaterQualityData);

  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);
  const [openStatsDialog, setOpenStatsDialog] = useState(false);
  const [selectedTank, setSelectedTank] = useState<WaterQualityData | null>(
    null
  );
  const [sliderValues, setSliderValues] = useState<number[]>([0, 100]);

  const handleSettingsClick = (tank: WaterQualityData) => {
    setSelectedTank(tank);
    setSliderValues([tank.minWaterLevel, tank.maxWaterLevel]);
    setOpenSettingsDialog(true);
  };

  const handleStatsClick = () => setOpenStatsDialog(true);

  const handleCloseSettingsDialog = () => setOpenSettingsDialog(false);
  const handleCloseStatsDialog = () => setOpenStatsDialog(false);

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (Array.isArray(newValue)) {
      setSliderValues(newValue as number[]);
    }
  };

  const handleUpdateClick = () => {
    if (selectedTank) {
      setWaterQuality((prev) =>
        prev.map((tank) =>
          tank.id === selectedTank.id
            ? {
                ...tank,
                minWaterLevel: sliderValues[0],
                maxWaterLevel: sliderValues[1],
              }
            : tank
        )
      );
      setOpenSettingsDialog(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Typography variant="h4" sx={{ margin: "8px 0px" }}>
        Tanks Overview
      </Typography>
      {waterQuality.map((tank) => (
        <Grid
          key={tank.id}
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "12px",
            boxShadow: "10px 5px 5px gray;",
            marginBottom: "12px",
          }}
        >
          <Grid item xs={4}>
            <Card
              sx={{
                backgroundColor: "#80c5de80",
                boxShadow: "5px 5px 5px gray;",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5">Tank Details</Typography>
                  <Button onClick={() => handleSettingsClick(tank)}>
                    <SettingsIcon sx={{ color: "#193929" }} />
                  </Button>
                </Box>
                <Typography variant="body1">Tank ID: {tank.id}</Typography>
                <Typography variant="body1">
                  Location: {tank.location}
                </Typography>
                <Typography variant="body1">
                  Max water Level: {tank.maxWaterLevel}%
                </Typography>
                <Typography variant="body1">
                  Min water Level: {tank.minWaterLevel}%
                </Typography>
                <Typography variant="body1">
                  Capacity: {tank.capacity} L
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                backgroundColor: "#80c5de80",
                boxShadow: "5px 5px 5px gray;",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5">Water Quality Analysis</Typography>
                  <Button onClick={handleStatsClick}>
                    <QueryStatsIcon sx={{ color: "#193929" }} />
                  </Button>
                </Box>
                <Typography variant="body1">pH: {tank.pH}</Typography>
                <Typography variant="body1">
                  Turbidity: {tank.turbidity} NTU
                </Typography>
                <Typography variant="body1">
                  Temperature: {tank.temperature} °C
                </Typography>
                <Typography variant="body1">
                  Dissolved Oxygen: {tank.dissolvedOxygen} mg/L
                </Typography>
                <Typography variant="body1">Status: {tank.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <WaterContainer level={tank.level} />
          </Grid>
        </Grid>
      ))}

      {/* Settings Dialog */}
      <Dialog
        open={openSettingsDialog}
        onClose={handleCloseSettingsDialog}
        aria-labelledby="settings-dialog-title"
        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(5px)", // Adding blur effect to backdrop
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle id="settings-dialog-title">Configuration</DialogTitle>
          <Button onClick={handleCloseSettingsDialog} color="primary">
            <CloseIcon
              sx={{
                color: "red",
                border: "1px solid red",
                padding: "2px",
                borderRadius: "5px",
              }}
            />
          </Button>
        </Box>

        <DialogContent>
          <DialogContentText>
            Adjust the Slider to set the tank water level
          </DialogContentText>
          <Box
            sx={{ width: 300, display: "flex", gap: "5px", marginTop: "28px" }}
          >
            <p>Min</p>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={sliderValues}
              onChange={handleSliderChange}
              valueLabelDisplay="on"
              min={0}
              max={100}
              disableSwap
              sx={{ margin: "10px 0px" }}
            />
            <p>Max</p>
          </Box>
          <Button variant="contained" onClick={handleUpdateClick}>
            Update
          </Button>
        </DialogContent>
      </Dialog>

      {/* Stats Dialog */}
      <Dialog
        open={openStatsDialog}
        onClose={handleCloseStatsDialog}
        aria-labelledby="stats-dialog-title"
        sx={{
          "& .MuiBackdrop-root": {
            backdropFilter: "blur(5px)", // Adding blur effect to backdrop
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle id="stats-dialog-title">
            Water Quality Analysis
          </DialogTitle>
          <Button onClick={handleCloseStatsDialog} color="primary">
            <CloseIcon
              sx={{
                color: "red",
                border: "1px solid red",
                padding: "2px",
                borderRadius: "5px",
              }}
            />
          </Button>
        </Box>
        <DialogContent sx={{ backgroundColor: "whitesmoke" }}>
          <TanksComponent />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TankList;
