"use client";

import { useParams } from "next/navigation";
import NavigationMenu from "../../../../../components/swms/NavigationMenu";
import TankComponent from "../../../../../components/swms/TankComponent";
import BorewellsComponent from "../../../../../components/swms/BorewellsComponent";
import MotorsComponent from "../../../../../components/swms/MotorsComponent";
import ValvesComponent from "../../../../../components/swms/ValvesComponent";
import UsageComponent from "../../../../../components/swms/usage/UsageComponent";
import BluetoothComponent from "../../../../../components/swms/Bluetooth";
import LiquidFillTankComponent from "../../../../../components/swms/LiquidFillTankComponent";

const SectionPage = () => {
  const params = useParams(); // Get the parameters from the URL
  const { section }: any = params; // Extract the section from params

  let ComponentToRender;

  switch (section) {
    case "tanks":
      ComponentToRender = TankComponent;
      break;
    case "borewells":
      ComponentToRender = BorewellsComponent;
      break;
    case "motors":
      ComponentToRender = MotorsComponent;
      break;
    case "valves":
      ComponentToRender = LiquidFillTankComponent;
      break;
    case "usage":
      ComponentToRender = UsageComponent;
      break;
    case "bluetooth":
      ComponentToRender = BluetoothComponent;
      break;
    default:
      ComponentToRender = ValvesComponent; // Default to ValvesComponent if the section is not recognized
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-xl">
      <NavigationMenu />
      <ComponentToRender />
    </div>
  );
};

export default SectionPage;
