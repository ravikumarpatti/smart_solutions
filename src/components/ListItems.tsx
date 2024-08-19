// components/ListItems.tsx

"use client";

import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NavItem from "./NavItem";

export const mainListItems = (
  <React.Fragment>
    <NavItem
      icon={<DashboardIcon sx={{ color: "wheat" }} />}
      text="Dashboard"
      href="/account/dashboard"
    />
    <NavItem
      icon={<ShoppingCartIcon sx={{ color: "wheat" }} />}
      text="Products"
      href="/account/dashboard/products"
    />
    <NavItem
      icon={<PeopleIcon sx={{ color: "wheat" }} />}
      text="Projects"
      href="/account/dashboard/projects"
    />
    <NavItem
      icon={<BarChartIcon sx={{ color: "wheat" }} />}
      text="Reports"
      href="/account/dashboard/reports"
    />
    <NavItem
      icon={<LayersIcon sx={{ color: "wheat" }} />}
      text="Issues"
      href="/account/dashboard/issues"
    />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader
      component="div"
      inset
      sx={{ color: "wheat", backgroundColor: "#193929" }}
    >
      Saved reports
    </ListSubheader>
    <NavItem
      icon={<AssignmentIcon sx={{ color: "wheat" }} />}
      text="Current Month Report"
      href="/account/dashboard/reports/current-month"
    />
    <NavItem
      icon={<AssignmentIcon sx={{ color: "wheat" }} />}
      text="Last Quarter Report"
      href="/account/dashboard/reports/last-quarter"
    />
    <NavItem
      icon={<AssignmentIcon sx={{ color: "wheat" }} />}
      text="Yearly Report"
      href="/account/dashboard/reports/yearly"
    />
  </React.Fragment>
);
