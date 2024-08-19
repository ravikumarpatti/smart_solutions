import React from "react";
import ImgMediaCard from "../components/Cards";
import { Box, Container, Typography } from "@mui/material";
import sbimage from "../public/images/sbimage.webp";
import scms from "../public/images/scms.jpg";
import spms from "../public/images/spms.webp";
import svms from "../public/images/svms.webp";
import swpms from "../public/images/swpms.png";
import swms from "../public/images/swms.jpg";

const HomePage: React.FC = () => {
  const cardsData = [
    {
      image: sbimage,
      title: "Home Management",
      loginPath: "/shms/login",
      learnMorePath: "/shms/learnmore",
    },
    {
      image: scms,
      title: "Camera Management",
      loginPath: "/scms/login",
      learnMorePath: "/scms/learnmore",
    },
    {
      image: spms,
      title: "Parking Management",
      loginPath: "/spms/login",
      learnMorePath: "/spms/learnmore",
    },
    {
      image: svms,
      title: "Visitor Management",
      loginPath: "/svms/login",
      learnMorePath: "/svms/learnmore",
    },
    {
      image: swms,
      title: "Pump Management",
      loginPath: "/swpms/login",
      learnMorePath: "/swpms/learnmore",
    },
    {
      image: swpms,
      title: "Water Management",
      loginPath: "/swms/login",
      learnMorePath: "/swms/learnmore",
    },
  ];

  return (
    <Container sx={{ height: "100vh", overflowY: "auto" }}>
      <Typography variant="h3" sx={{ margin: "15px 0px" }}>
        Smart Building Solutions
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          //   minHeight: "auto",
          overflowY: "auto",
        }}
      >
        {cardsData.map((card, index) => (
          <ImgMediaCard
            key={index}
            image={card.image}
            title={card.title}
            loginPath={card.loginPath}
            learnMorePath={card.learnMorePath}
          />
        ))}
      </Box>
    </Container>
  );
};

export default HomePage;
