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
    headerName: "Name",
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
    headerName: "Company Name",
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
    name: "Jon Snow",
    companyName: "Night's Watch",
    location: "The Wall",
    status: "Active",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    companyName: "Lannister Corp",
    location: "King's Landing",
    status: "Open",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    companyName: "Lannister Corp",
    location: "King's Landing",
    status: "Active",
  },
  {
    id: 4,
    name: "Arya Stark",
    companyName: "House Stark",
    location: "Winterfell",
    status: "Active",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    companyName: "Targaryen Enterprises",
    location: "Dragonstone",
    status: "Open",
  },
  {
    id: 6,
    name: "Melisandre",
    companyName: "Red Temple",
    location: "Dragonstone",
    status: "Active",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    companyName: "Ferrara Inc.",
    location: "Braavos",
    status: "Open",
  },
  {
    id: 8,
    name: "Rossini Frances",
    companyName: "Iron Bank",
    location: "Braavos",
    status: "Active",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    companyName: "Roxie Holdings",
    location: "Volantis",
    status: "Open",
  },
];

export default function Consultants() {
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
