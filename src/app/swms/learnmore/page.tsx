"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import a from "../../../public/images/swms/a.webp";
import b from "../../../public/images/swms/b.webp";
import c from "../../../public/images/swms/c.webp";
import d from "../../../public/images/swms/d.webp";

export default function LearnMorePage() {
  const features = [
    {
      title: "Real-Time Water Usage Monitoring",
      description:
        "Track water usage in real-time to identify waste, optimize consumption, and ensure sustainability.",
      image: d,
    },
    {
      title: "Leak Detection & Prevention",
      description:
        "Implement smart sensors to detect leaks early, preventing water waste and costly damage.",
      image: c,
    },
    {
      title: "Automated Irrigation Systems",
      description:
        "Optimize irrigation with automated systems that adjust watering based on weather conditions and soil moisture levels.",
      image: b,
    },
    {
      title: "Water Quality Management",
      description:
        "Monitor and manage water quality with smart sensors, ensuring safe and clean water supply.",
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
        className="bg-gradient-to-r from-teal-400 to-teal-600 text-white"
      >
        <Typography variant="h2" className="font-bold text-center">
          Smart Water Management Solutions
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          What is a Smart Water Management Solution?
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          Smart Water Management Solutions integrate advanced technology to
          monitor, manage, and optimize water usage. These solutions are
          essential for ensuring sustainable water resources, reducing waste,
          and improving operational efficiency. By leveraging real-time data,
          automated control systems, and predictive analytics, smart water
          management systems help industries, municipalities, and households
          manage water more effectively and responsibly.
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
          Benefits of Smart Water Management
        </Typography>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <Box className="p-4">
                <Typography variant="h5" className="mb-2 font-bold">
                  {feature.title}
                </Typography>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="rounded-md"
                />
                <Typography variant="body1" className="mt-2">
                  {feature.description}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Detailed Information Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          Detailed Information
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Smart Water Management Solutions offer a holistic approach to managing
          water resources effectively. By tracking water usage in real-time,
          these systems enable organizations and individuals to identify areas
          where water is being wasted and take corrective actions. This not only
          helps in conserving water but also leads to significant cost savings
          over time.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Leak detection is a critical feature of smart water management
          systems. By utilizing smart sensors, these systems can detect leaks
          early, preventing water damage and reducing waste. Automated
          irrigation systems further enhance efficiency by adjusting watering
          schedules based on real-time weather conditions and soil moisture
          levels, ensuring that plants receive the optimal amount of water.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Water quality management is another essential aspect of smart water
          management solutions. By continuously monitoring water quality through
          smart sensors, these systems ensure that water remains safe for
          consumption and use. This is particularly important for industries
          that rely on high water quality for their operations, such as food and
          beverage manufacturing, healthcare, and agriculture.
        </Typography>
      </Box>

      {/* Call to Action Section */}
      <Box className="my-10 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Start Managing Water Smartly
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Discover how Smart Water Management Solutions can transform your water
          usage and conservation efforts. Contact us today to learn more about
          our offerings.
        </Typography>
        <a
          href="/"
          className="inline-flex text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-teal-900"
        >
          Contact Us
        </a>
      </Box>
    </Container>
  );
}
