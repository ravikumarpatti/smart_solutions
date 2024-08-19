import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Pie } from "react-chartjs-2";

const MotorsComponent = () => {
  const data = {
    labels: ["Operational", "Under Maintenance", "Idle"],
    datasets: [
      {
        data: [10, 2, 3],
        backgroundColor: ["green", "orange", "gray"],
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" className="mb-4">
        Motors Overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={10} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Motor Status Distribution</Typography>
              <Pie data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MotorsComponent;
