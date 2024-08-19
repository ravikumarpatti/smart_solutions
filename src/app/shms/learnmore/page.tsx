"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import a from "../../../public/images/shms/a.webp";
import b from "../../../public/images/shms/b.webp";
import c from "../../../public/images/shms/c.webp";
import d from "../../../public/images/shms/d.webp";

export default function LearnMorePage() {
  const features = [
    {
      title: "Energy Efficiency",
      description:
        "Monitor and manage energy consumption with smart devices. Control lighting, heating, and cooling to reduce waste and save money.",
      image: d,
    },
    {
      title: "Security & Surveillance",
      description:
        "Enhance your home security with smart locks, cameras, and motion sensors. Receive alerts and monitor your home from anywhere.",
      image: c,
    },
    {
      title: "Remote Monitoring",
      description:
        "Keep an eye on your home with remote monitoring solutions. Access live feeds and control smart devices via a mobile app.",
      image: b,
    },
    {
      title: "Automation & Control",
      description:
        "Automate daily routines with smart home automation. Set schedules for lighting, appliances, and more to enhance convenience.",
      image: a,
    },
  ];

  return (
    <Container maxWidth="lg" className="py-10">
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          backgroundColor: "#f7f7f7",
        }}
        className="bg-gradient-to-r from-blue-400 to-green-600 text-white"
      >
        <Typography variant="h2" className="font-bold text-center">
          Smart Home Management Solutions
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          What is a Smart Home Management Solution?
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          A Smart Home Management Solution integrates technology to provide
          seamless control over various home systems and appliances. From
          lighting and temperature control to security and energy management,
          smart home solutions offer enhanced convenience, security, and
          efficiency. By utilizing a central hub or mobile app, homeowners can
          automate and monitor their living spaces from anywhere in the world.
        </Typography>
      </Box>

      {/* Key Features Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="shadow-lg rounded-lg">
                <CardMedia
                  component="img"
                  alt={feature.title}
                  height="140"
                  image={feature.image.src}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Carousel Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          Benefits of Smart Home Management
        </Typography>
        <Carousel>
          {features.map((feature, index) => (
            <Paper key={index} className="p-4">
              <Typography variant="h5" className="mb-2 font-bold">
                {feature.title}
              </Typography>
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={100}
                className="rounded-md"
              />
              <Typography variant="body1" className="mt-2">
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Carousel>
      </Box>

      {/* Detailed Information Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          Detailed Information
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Smart home management solutions provide homeowners with the ability to
          monitor and control their home environment efficiently. With smart
          devices integrated into the home’s infrastructure, you can set
          routines, control energy usage, and ensure safety with ease. Modern
          smart home systems are highly customizable, allowing users to tailor
          the setup to their specific needs and preferences.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          The market offers a wide variety of smart home devices, including
          smart thermostats, lighting systems, security cameras, and
          voice-activated assistants. These devices not only provide convenience
          but also contribute to a more sustainable living by optimizing
          resource usage. Smart homes are designed to make life easier, safer,
          and more enjoyable, offering peace of mind through remote access and
          automation.
        </Typography>
      </Box>

      {/* Call to Action Section */}
      <Box className="my-10 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Ready to Transform Your Home?
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Discover the endless possibilities with Smart Home Management
          Solutions. Contact us today to learn how we can help you build the
          home of the future.
        </Typography>
        <a
          href="/"
          className="inline-flex text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900"
        >
          Contact Us
        </a>
      </Box>
    </Container>
  );
}
