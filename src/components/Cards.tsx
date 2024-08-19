"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import type { StaticImageData } from "next/image";

// Define the props interface
interface ImgMediaCardProps {
  image: StaticImageData;
  title: string;
  loginPath: string;
  learnMorePath: string;
}

// Use the interface for the component's props
export default function ImgMediaCard({
  image,
  title,
  loginPath,
  learnMorePath,
}: ImgMediaCardProps) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Card
      sx={{
        width: 355,
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Ensures even spacing of content
        backgroundColor: "#193929",
        color: "wheat",
        borderRadius: "10px",
        border: "2px solid transparent",
        ":hover": {
          border: "2px solid white",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        src={image.src}
        sx={{
          maxHeight: 150, // Set a max height for uniformity
          objectFit: "cover", // Ensure the image covers the entire area
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {title} description goes here.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "white",
            border: "1px solid black",
            ":hover": { border: "1px solid white" },
          }}
          onClick={() => handleNavigation(loginPath)}
        >
          Login
        </Button>
        <Button
          size="small"
          sx={{
            color: "white",
            border: "1px solid black",
            ":hover": { border: "1px solid white" },
          }}
          onClick={() => handleNavigation(learnMorePath)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
