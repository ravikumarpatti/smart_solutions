import { Box, Button, ListItemIcon, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Motors from "./MotorsList";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "aliceblue",
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const MotorsComponent = () => {
  const [view, setView] = useState("list");
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedOption("All"); // Reset dropdown to "All" on search
  };

  return (
    <>
      <Box className="flex flex-row justify-between items-center content-center p-2.5 my-2 rounded-lg bg-white">
        <Typography variant="h5">Motors Overview</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "12px" }}>
          <Search
            sx={{
              backgroundColor: "whitesmoke",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Search>
          <FormControl variant="outlined" className="w-32">
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              IconComponent={ExpandMoreIcon}
              className="bg-gray-100 rounded text-black w-fit min-w-32"
              sx={{
                padding: "0px",
                ".MuiSelect-outlined": {
                  padding: "8px 8px",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderStyle: "none",
                },
                ":hover": {
                  backgroundColor: "aliceblue",
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
              <MenuItem value="Defect">Defect</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={() =>
              setView((prevView) => (prevView === "list" ? "grid" : "list"))
            }
            sx={{
              backgroundColor: "whitesmoke",
              ":hover": {
                backgroundColor: "aliceblue",
              },
            }}
          >
            {view === "list" ? (
              <GridViewIcon sx={{ color: "#193929" }} />
            ) : (
              <FormatListBulletedIcon sx={{ color: "#193929" }} />
            )}
          </Button>
        </Box>
      </Box>
      <Motors view={view} filter={selectedOption} searchTerm={searchTerm} />
    </>
  );
};

export default MotorsComponent;
