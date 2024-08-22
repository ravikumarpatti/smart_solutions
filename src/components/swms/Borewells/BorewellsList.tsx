import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { dummyData } from "./dummy";
import Image from "next/image";
import noDataImage from "/public/images/no_data.png";

interface BorewellsProps {
  view: string;
  filter: string;
  searchTerm: string;
}

interface Borewell {
  DeviceId: string;
  DeviceLocation: string;
  Voltage: number;
  Current: number;
  Power: number;
  PowerFactor: number;
  PumpStatus: string;
  DeviceType: string;
}

interface BorewellData {
  products: Borewell[];
  newOffset: number;
  totalProducts: number;
}

const Borewells: React.FC<BorewellsProps> = ({ view, filter, searchTerm }) => {
  const [borewellData, setBorewellData] = useState<BorewellData>(dummyData);

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

  const handleToggleChange = (borewell: Borewell) => {
    if (borewell.PumpStatus === "DEFECT") {
      return; // No action if defective
    }

    const newStatus = borewell.PumpStatus === "ON" ? "OFF" : "ON";
    const updatedData = borewellData.products.map((item) =>
      item.DeviceId === borewell.DeviceId
        ? { ...item, PumpStatus: newStatus }
        : item
    );

    setBorewellData({ ...borewellData, products: updatedData });
    alert(`${borewell.DeviceId} has been switched ${newStatus}`);
    console.log(borewell);
  };

  const filteredBorewells = borewellData.products.filter((borewell) => {
    if (filter !== "All") {
      if (filter === "Active" && borewell.PumpStatus !== "ON") return false;
      if (filter === "Inactive" && borewell.PumpStatus !== "OFF") return false;
      if (filter === "Defect" && borewell.PumpStatus !== "DEFECT") return false;
    }

    const searchTermLower = searchTerm.toLowerCase();
    return (
      borewell.DeviceId.toLowerCase().includes(searchTermLower) ||
      borewell.DeviceLocation.toLowerCase().includes(searchTermLower) ||
      borewell.PumpStatus.toLowerCase().includes(searchTermLower)
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
      {filteredBorewells.length === 0 ? (
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
          {filteredBorewells.map((borewell: Borewell, index: number) => (
            <Box
              key={index}
              mb={view === "list" ? 2 : 0}
              p={2}
              border={1}
              borderColor={getBorderColor(borewell.PumpStatus)}
              boxShadow={getBoxShadow(borewell.PumpStatus)}
              borderRadius={2}
              sx={{
                backgroundColor: "whitesmoke",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="subtitle1">{borewell.DeviceId}</Typography>
                <Typography variant="body2">
                  {borewell.DeviceLocation}
                </Typography>
                <Typography variant="body2">
                  Status: {borewell.PumpStatus}
                </Typography>
              </Box>
              <Box className="relative w-20 h-9 my-auto">
                <input
                  type="checkbox"
                  className="absolute w-full h-full opacity-0 cursor-pointer z-30"
                  checked={borewell.PumpStatus === "ON"}
                  onChange={() => handleToggleChange(borewell)}
                  disabled={borewell.PumpStatus === "DEFECT"}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full z-20">
                  <div
                    className={`absolute top-2 left-1 w-6 h-5 text-xs font-bold text-white flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
                      borewell.PumpStatus === "ON"
                        ? "bg-red-500 translate-x-10"
                        : "bg-blue-500 translate-x-0"
                    }`}
                  >
                    {borewell.PumpStatus === "ON" ? "OFF" : "ON"}
                  </div>
                </div>
                <div
                  className={`absolute top-0 left-0 right-0 bottom-0 bg-blue-100 rounded-full transition-colors duration-300 ${
                    borewell.PumpStatus === "ON" ? "bg-red-200" : "bg-blue-200"
                  }`}
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Borewells;
