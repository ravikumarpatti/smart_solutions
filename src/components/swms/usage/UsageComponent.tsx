import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import InflowOutflowChart from "./InflowOutflowChart";
import DailyUsageChart from "./DailyUsageChart";
import MonthlyUsageChart from "./MonthlyUsageChart";
import ExportDataButton from "./ExportDataButton";

const UsageComponent = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "15px 0px",
        }}
      >
        <Typography variant="h4" className="mb-4">
          Usage Analytics
        </Typography>
        <ExportDataButton />
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={10} xs={12}>
          <Card>
            <CardContent>
              <InflowOutflowChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} md={8} sm={10} xs={12}>
          <Card>
            <CardContent>
              <DailyUsageChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} md={8} sm={10} xs={12}>
          <Card>
            <CardContent>
              <MonthlyUsageChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsageComponent;
