"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        ACS Technologies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface SignInProps {
  title: string;
}

export default function SignIn({ title }: SignInProps) {
  const router = useRouter();
  const [signupPath, setSignupPath] = useState<string>("");
  const [dashboardPath, setDashboardPath] = useState<string>("");

  useEffect(() => {
    // Get the current path from the window object
    const currentPath = window.location.pathname;
    // Derive the base path by removing the last segment (login)
    const basePath = currentPath.split("/").slice(0, -1).join("/");
    // Set the signup and dashboard paths
    setSignupPath(`${basePath}/signup`);
    setDashboardPath(`${basePath}/dashboard`);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Hardcoded credentials check
    if (email === "admin" && password === "admin") {
      router.push(dashboardPath);
    } else {
      toast.error("Incorrect credentials");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Toaster /> {/* Toaster for showing toast notifications */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          {title} {/* Dynamically set the title */}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#193929",
              ":hover": {
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid #193929",
              },
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                sx={{
                  color: "black",
                  fontStyle: "italic",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href={signupPath}
                sx={{
                  color: "black",
                  fontStyle: "italic",
                  textDecoration: "none",
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
