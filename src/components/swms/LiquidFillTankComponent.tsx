import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const LiquidFillTankComponent: React.FC = () => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillLevel((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex flex-col items-center">
        <Box
          className="center"
          sx={{
            width: 200,
            height: 300, // Rectangular shape
            position: "relative",
            borderRadius: "10px", // Slight rounding for aesthetics
            border: "2px solid #fff",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <Box
            className="wave"
            sx={{
              position: "absolute",
              top: `${100 - fillLevel}%`, // Set the wave height based on fill level
              left: "-50%",
              width: "200%",
              height: "200%",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "38%", // Slight rounding on the wave
              transform: "rotate(360deg)",
              animation: "wave 30s linear infinite",
              transition: "top 1s ease",
            }}
          />
        </Box>
        <Typography variant="h6" className="mt-4">
          {fillLevel}%
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default LiquidFillTankComponent;
