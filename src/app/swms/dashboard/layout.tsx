"use client";

import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  mainListItems,
  secondaryListItems,
} from "../../../components/ListItems";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Container,
} from "@mui/material";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { useRouter, usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: "relative",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `100%`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [value, setValue] = React.useState();
  const router = useRouter();
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={true}>
          <Toolbar sx={{ pr: "24px", backgroundColor: "#193929" }}>
            <svg width={25} height={25} viewBox="0 0 576 512" fill="wheat">
              <path d="M357.7 8.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192c-9.4 8.6-12.7 22-8.5 34c87.1 25.3 155.6 94.2 180.3 181.6L464 416c26.5 0 48-21.5 48-48l0-112 32 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8.1-35.2l-208-192zM288 208c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64zM24 256c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184c0 13.3 10.7 24 24 24s24-10.7 24-24c0-128.1-103.9-232-232-232zm8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM0 376c0 13.3 10.7 24 24 24c48.6 0 88 39.4 88 88c0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136c-13.3 0-24 10.7-24 24z" />
            </svg>
            <Typography
              component="h1"
              variant="h5"
              color="wheat"
              noWrap
              sx={{ flexGrow: 1, ml: "15px" }}
            >
              Smart Water Management System
            </Typography>
            {/* <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                backgroundColor: "#193929",
                width: "25%",
              }}
            >
              <BottomNavigationAction
                label="Contact Us"
                icon={<PermContactCalendarOutlinedIcon />}
                sx={{
                  color: "wheat",
                  "&.Mui-selected": {
                    color: "wheat",
                    border: "0.025rem solid wheat",
                    borderRadius: "8px",
                  },
                }}
              />
              <BottomNavigationAction
                label="Learn More"
                icon={<LocalLibraryOutlinedIcon />}
                sx={{
                  color: "wheat",
                  "&.Mui-selected": {
                    color: "wheat",
                    border: "0.025rem solid wheat",
                    borderRadius: "8px",
                  },
                }}
              />
              <BottomNavigationAction
                label="Notifications"
                icon={<NotificationsIcon />}
                sx={{
                  color: "wheat",
                  "&.Mui-selected": {
                    color: "wheat",
                    border: "0.025rem solid wheat",
                    borderRadius: "8px",
                  },
                }}
              />
            </BottomNavigation>
            <Button onClick={toggleDarkMode} sx={{ color: "wheat" }}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </Button> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Main open={open}>
          <DrawerHeader />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}{" "}
          </Container>
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              border: "none",
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader
            sx={{ backgroundColor: "#193929", borderColor: "#193929" }}
          >
            <IconButton onClick={handleDrawerClose} sx={{ color: "wheat" }}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Contact Us", "Learn More", "Settings", "Logout"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
