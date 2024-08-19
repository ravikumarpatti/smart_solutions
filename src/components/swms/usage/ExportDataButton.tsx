// /components/swms/usage/ExportDataButton.tsx

import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ExportDataButton = () => {
  const handleExport = () => {
    // Logic for exporting data goes here
    alert("Exporting data...");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FileDownloadIcon />}
      onClick={handleExport}
    >
      Export Data
    </Button>
  );
};

export default ExportDataButton;
