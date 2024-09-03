import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import { useRouter } from "next/navigation";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
    editable: false,
    valueFormatter: (params: any) => {
      const value = params.value;
      return value != null ? value.toString().padStart(6, "0") : "000000";
    },
  },
  {
    field: "name",
    headerName: "Client Name",
    flex: 1,
    editable: false,
    renderCell: (params) => {
      const router = useRouter();
      return (
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            router.push(`/svms/dashboard/consultants/${params.row.id}`);
          }}
        >
          {params.value}
        </Link>
      );
    },
  },
  {
    field: "companyName",
    headerName: "Project Name",
    flex: 1,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    editable: true,
  },
  {
    field: "analytics",
    headerName: "Analytics",
    flex: 0.5,
    renderCell: (params) => (
      <Button
        startIcon={<AnalyticsOutlinedIcon />}
        onClick={() => console.log("Analytics for", params.row.id)}
      ></Button>
    ),
  },
  {
    field: "settings",
    headerName: "Settings",
    flex: 0.5,
    renderCell: (params) => (
      <Button
        startIcon={<SettingsOutlinedIcon />}
        onClick={() => console.log("Settings for", params.row.id)}
      ></Button>
    ),
  },
  {
    field: "sendnote",
    headerName: "Send Note",
    flex: 0.5,
    renderCell: (params) => (
      <Button
        startIcon={<EventNoteOutlinedIcon sx={{ color: "green" }} />}
        onClick={() => console.log("Send Note for", params.row.id)}
      ></Button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    flex: 0.5,
    renderCell: (params) => (
      <Button
        startIcon={<DeleteOutlineOutlinedIcon sx={{ color: "red" }} />}
        onClick={() => console.log("Delete", params.row.id)}
      ></Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Project Alpha",
    companyName: "Tech Innovations Inc.",
    location: "New York, USA",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Project Beta",
    companyName: "Future Ventures Ltd.",
    location: "San Francisco, USA",
    status: "Open",
  },
  {
    id: 3,
    name: "Project Gamma",
    companyName: "Green Energy Corp.",
    location: "Berlin, Germany",
    status: "Closed",
  },
  {
    id: 4,
    name: "Project Delta",
    companyName: "Healthcare Solutions",
    location: "London, UK",
    status: "In Progress",
  },
  {
    id: 5,
    name: "Project Epsilon",
    companyName: "Smart Tech Ltd.",
    location: "Tokyo, Japan",
    status: "Open",
  },
  {
    id: 6,
    name: "Project Zeta",
    companyName: "AutoDrive Inc.",
    location: "Detroit, USA",
    status: "Closed",
  },
  {
    id: 7,
    name: "Project Eta",
    companyName: "CloudNet Solutions",
    location: "Dublin, Ireland",
    status: "In Progress",
  },
  {
    id: 8,
    name: "Project Theta",
    companyName: "AI Revolution",
    location: "Silicon Valley, USA",
    status: "Open",
  },
  {
    id: 9,
    name: "Project Iota",
    companyName: "Financial Services Group",
    location: "Zurich, Switzerland",
    status: "Closed",
  },
];

export default function Projects() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
