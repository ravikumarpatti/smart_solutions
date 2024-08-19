import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Line } from "react-chartjs-2";

const BorewellsComponent = () => {
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
        label: "Water Extraction (KL)",
        data: [50, 60, 45, 70, 55, 65, 75, 80, 60, 55, 50, 70],
        borderColor: "#193929",
        fill: false,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" className="mb-4">
        Borewells Overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} md={10} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Monthly Water Extraction</Typography>
              <Line data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BorewellsComponent;
