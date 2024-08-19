import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Doughnut } from "react-chartjs-2";

const ValvesComponent = () => {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [15, 5],
        backgroundColor: ["green", "red"],
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" className="mb-4">
        Valves Overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={10} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Valve Status</Typography>
              <Doughnut data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ValvesComponent;
