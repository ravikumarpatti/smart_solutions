import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { dummyData } from "./dummy";
import Image from "next/image";
import noDataImage from "/public/images/no_data.png";

interface ValvesProps {
  view: string;
  filter: string;
  searchTerm: string;
}

interface Valve {
  DeviceId: string;
  DeviceLocation: string;
  Voltage: number;
  Current: number;
  Power: number;
  PowerFactor: number;
  PumpStatus: string;
  DeviceType: string;
}

interface ValveData {
  products: Valve[];
  newOffset: number;
  totalProducts: number;
}

const Valves: React.FC<ValvesProps> = ({ view, filter, searchTerm }) => {
  const [valveData, setValveData] = React.useState<ValveData>(dummyData);

  const getBorderColor = (status: string) => {
    if (status === "ON") return "green";
    if (status === "OFF") return "blue";
    return "red";
  };

  const getBoxShadow = (status: string) => {
    if (status === "ON") return "0 4px 8px rgba(0, 255, 0, 0.3)";
    if (status === "OFF") return "0 4px 8px rgba(0, 0, 255, 0.3)";
    return "0 4px 8px rgba(255, 0, 0, 0.3)";
  };

  const filteredValves = valveData.products.filter((valve) => {
    // Filter based on dropdown selection
    if (filter !== "All") {
      if (filter === "Active" && valve.PumpStatus !== "ON") return false;
      if (filter === "Inactive" && valve.PumpStatus !== "OFF") return false;
      if (filter === "Defect" && valve.PumpStatus !== "DEFECT") return false;
    }

    // Filter based on search term
    const searchTermLower = searchTerm.toLowerCase();
    return (
      valve.DeviceId.toLowerCase().includes(searchTermLower) ||
      valve.DeviceLocation.toLowerCase().includes(searchTermLower) ||
      valve.PumpStatus.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <Box
      sx={{
        padding: "10px 15px",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      {filteredValves.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Image
            src={noDataImage}
            alt="No data available"
            width={500}
            height={300}
          />
          <Typography variant="h6" color="textSecondary">
            No data available
          </Typography>
        </Box>
      ) : (
        <Box
          mt={2}
          display="grid"
          gridTemplateColumns={
            view === "grid" ? "repeat(auto-fill, minmax(300px, 1fr))" : "none"
          }
          gap={view === "grid" ? 2 : 0}
        >
          {filteredValves.map((valve: Valve, index: number) => (
            <Box
              key={index}
              mb={view === "list" ? 2 : 0}
              p={2}
              border={1}
              borderColor={getBorderColor(valve.PumpStatus)}
              boxShadow={getBoxShadow(valve.PumpStatus)}
              borderRadius={2}
              sx={{
                backgroundColor: "whitesmoke",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1">{valve.DeviceId}</Typography>
              <Typography variant="body2">{valve.DeviceLocation}</Typography>
              <Typography variant="body2">
                Status: {valve.PumpStatus}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Valves;
