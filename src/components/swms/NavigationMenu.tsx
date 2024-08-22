import { Tabs, Tab } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import WaterIcon from "@mui/icons-material/Opacity";
import WellIcon from "@mui/icons-material/Explore";
import MotorIcon from "@mui/icons-material/ElectricBolt";
import ValveIcon from "@mui/icons-material/Adjust";
import UsageIcon from "@mui/icons-material/InsertChart";
import BluetoothConnectedIcon from "@mui/icons-material/BluetoothConnected";

const NavigationMenu = () => {
  const router = useRouter();
  const pathname: any = usePathname();
  const [selectedTab, setSelectedTab] = useState(0);

  // Array of paths corresponding to the tabs
  const paths = [
    "/swms/dashboard/sections/tanks",
    "/swms/dashboard/sections/borewells",
    "/swms/dashboard/sections/motors",
    "/swms/dashboard/sections/valves",
    "/swms/dashboard/sections/usage",
    "/swms/dashboard/sections/bluetooth",
  ];

  useEffect(() => {
    const currentIndex = paths.indexOf(pathname);
    if (currentIndex !== -1) {
      setSelectedTab(currentIndex);
    } else if (pathname === "/swms/dashboard/sections/") {
      router.push("/swms/dashboard/sections/tanks");
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    router.push(paths[newValue]);
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      aria-label="Navigation Tabs"
      variant="fullWidth"
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        ".MuiTabs-indicator": {
          backgroundColor: "#193929",
        },
        position: "sticky",
        top: "8px",
      }}
    >
      <Tab
        icon={
          <WaterIcon sx={{ color: selectedTab === 0 ? "#193929" : "gray" }} />
        }
        label="Tanks"
        sx={{
          color: selectedTab === 0 ? "#193929" : "gray",
          "&.Mui-selected": {
            fontWeight: "bold",
            color: "#193929",
          },
        }}
      />
      <Tab
        icon={
          <WellIcon sx={{ color: selectedTab === 1 ? "#193929" : "gray" }} />
        }
        label="Borewells"
        sx={{
          color: selectedTab === 0 ? "#193929" : "gray",

          "&.Mui-selected": {
            color: "#193929",
            fontWeight: "bold",
          },
        }}
      />
      <Tab
        icon={
          <MotorIcon sx={{ color: selectedTab === 2 ? "#193929" : "gray" }} />
        }
        label="Motors"
        sx={{
          color: selectedTab === 0 ? "#193929" : "gray",
          "&.Mui-selected": {
            color: "#193929",
            fontWeight: "bold",
          },
        }}
      />
      <Tab
        icon={
          <ValveIcon sx={{ color: selectedTab === 3 ? "#193929" : "gray" }} />
        }
        label="Valves"
        sx={{
          color: selectedTab === 0 ? "#193929" : "gray",
          "&.Mui-selected": {
            fontWeight: "bold",
            color: "#193929",
          },
        }}
      />
      <Tab
        icon={
          <UsageIcon sx={{ color: selectedTab === 4 ? "#193929" : "gray" }} />
        }
        label="Usage"
        sx={{
          color: selectedTab === 0 ? "#193929" : "gray",
          "&.Mui-selected": {
            fontWeight: "bold",
            color: "#193929",
          },
        }}
      />
      <Tab
        icon={
          <BluetoothConnectedIcon
            sx={{ color: selectedTab === 5 ? "#193929" : "gray" }}
          />
        }
        label="Bluetooth"
        sx={{
          color: selectedTab === 0 ? "#193929" : "gray",
          "&.Mui-selected": {
            fontWeight: "bold",
            color: "#193929",
          },
        }}
      />
    </Tabs>
  );
};

export default NavigationMenu;
