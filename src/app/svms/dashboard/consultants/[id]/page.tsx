"use client";

import { useParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Projects from "../../../../../components/sams/projects/page";

export default function ConsultantDetailPage() {
  const params = useParams();
  const consultantId: any = params?.id;

  const [consultant, setConsultant] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (consultantId) {
      // Simulating an API call to fetch consultant details based on the ID
      const fetchConsultant = async () => {
        const mockData = [
          {
            id: 1,
            name: "Jon Snow",
            companyName: "Night's Watch",
            location: "The Wall",
            status: "Active",
          },
          {
            id: 2,
            name: "Cersei Lannister",
            companyName: "Lannister Corp",
            location: "King's Landing",
            status: "Open",
          },
          {
            id: 3,
            name: "Jaime Lannister",
            companyName: "Lannister Corp",
            location: "King's Landing",
            status: "Active",
          },
        ];

        const consultant = mockData.find(
          (c) => c.id === parseInt(consultantId)
        );
        setConsultant(consultant);
        setLoading(false);
      };

      fetchConsultant();
    }
  }, [consultantId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!consultant) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4">Consultant not found</Typography>
      </Box>
    );
  }

  return (
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
        <Typography variant="h3">Cunsultant Admin Dashboard</Typography>
        <Button variant="contained">
          {" "}
          <AddIcon />
          Create Project
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
        <Projects />
      </Box>
    </Box>
  );
}
