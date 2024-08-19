import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  TextField,
} from "@mui/material";

// Extend the Navigator interface to include the bluetooth property
interface NavigatorWithBluetooth extends Navigator {
  bluetooth: any;
}

// Type definition for Bluetooth device
interface BluetoothDevice {
  name?: string;
  gatt: any;
}

const BluetoothComponent: React.FC = () => {
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [scanning, setScanning] = useState<boolean>(false);
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [pairedDevice, setPairedDevice] = useState<BluetoothDevice | null>(
    null
  );
  const [code, setCode] = useState<string>("");

  const scanForDevices = async () => {
    setScanning(true);
    try {
      const device: BluetoothDevice = await (
        navigator as NavigatorWithBluetooth
      ).bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ["device_information"],
      });
      setPermissionGranted(true);
      setDevices((prevDevices) => [...prevDevices, device]);
    } catch (error) {
      console.error("Error scanning for devices:", error);
      setPermissionGranted(false);
    }
    setScanning(false);
  };

  const pairDevice = async (device: BluetoothDevice) => {
    try {
      const server = await device.gatt.connect();
      setPairedDevice(device);
      alert("Device paired successfully!");
    } catch (error) {
      console.error("Error pairing device:", error);
    }
  };

  const handleCodeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const verifyCode = () => {
    if (code === "1234") {
      alert("Code matched successfully!");
    } else {
      alert("Incorrect code. Please try again.");
    }
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Bluetooth Device Manager
      </Typography>

      <Button
        variant="contained"
        onClick={scanForDevices}
        disabled={scanning}
        sx={{ marginBottom: "20px" }}
      >
        {scanning ? <CircularProgress size={24} /> : "Scan for Devices"}
      </Button>

      {!permissionGranted && (
        <Typography variant="body1" color="error">
          Bluetooth permission is required to scan for devices.
        </Typography>
      )}

      {devices.length > 0 && (
        <List>
          {devices.map((device, index) => (
            <ListItem button key={index} onClick={() => pairDevice(device)}>
              <ListItemText primary={device.name || "Unnamed Device"} />
            </ListItem>
          ))}
        </List>
      )}

      {pairedDevice && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Paired with {pairedDevice.name}
          </Typography>
          <TextField
            label="Enter Pairing Code"
            value={code}
            onChange={handleCodeInput}
            sx={{ marginBottom: "20px" }}
          />
          <Button variant="contained" onClick={verifyCode}>
            Verify Code
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BluetoothComponent;
