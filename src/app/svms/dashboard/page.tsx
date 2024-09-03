"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Cunsultants from "../../../components/sams/consultants/page";
import AddIcon from "@mui/icons-material/Add";

export default function DashboardLayout() {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          padding: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography variant="h3">Super Admin Dashboard</Typography>
          <Button variant="contained">
            {" "}
            <AddIcon />
            Add Cunsultant
          </Button>
        </Box>
        <Box
          sx={{
            padding: "25px",
            backgroundColor: "whitesmoke",
            borderRadius: "12px",
            marginTop: "2rem",
          }}
        >
          <Cunsultants />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
