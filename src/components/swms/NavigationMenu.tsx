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

  // Set the active tab based on the current pathname
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
        ".Mui-selected": {
          color: "#193929",
          border: "none",
        },
        ".MuiTabs-indicator": {
          backgroundColor: "#193929",
        },
      }}
    >
      <Tab icon={<WaterIcon />} label="Tanks" />
      <Tab icon={<WellIcon />} label="Borewells" />
      <Tab icon={<MotorIcon />} label="Motors" />
      <Tab icon={<ValveIcon />} label="Valves" />
      <Tab icon={<UsageIcon />} label="Usage" />
      <Tab icon={<BluetoothConnectedIcon />} label="Bluetooth" />
    </Tabs>
  );
};

export default NavigationMenu;
