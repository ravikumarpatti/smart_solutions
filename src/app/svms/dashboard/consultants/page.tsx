import { useRouter, useParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export default function ConsultantDetailPage() {
  const router = useRouter();
  const params = useParams(); // Get the dynamic parameters from the URL

  const consultantId: any = params?.id; // The dynamic segment of the URL

  const [consultant, setConsultant] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (consultantId) {
      // Simulating an API call to fetch consultant details based on the ID
      const fetchConsultant = async () => {
        // Replace this with your actual API call logic
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
          // Add more mock data as needed
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
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">{consultant.name}</Typography>
      <Typography variant="h6">Company: {consultant.companyName}</Typography>
      <Typography variant="h6">Location: {consultant.location}</Typography>
      <Typography variant="h6">Status: {consultant.status}</Typography>
    </Box>
  );
}
