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
import a from "../../../public/images/swpms/a.webp";
import b from "../../../public/images/swpms/b.webp";
import c from "../../../public/images/swpms/c.webp";
import d from "../../../public/images/swpms/d.webp";

export default function LearnMorePage() {
  const features = [
    {
      title: "Remote Monitoring & Control",
      description:
        "Manage and monitor pumps remotely through mobile or web applications, ensuring efficient operation from anywhere.",
      image: d,
    },
    {
      title: "Energy Efficiency Optimization",
      description:
        "Utilize advanced algorithms to optimize pump performance, reducing energy consumption and operational costs.",
      image: c,
    },
    {
      title: "Predictive Maintenance",
      description:
        "Leverage IoT sensors and data analytics to predict maintenance needs, minimizing downtime and extending pump life.",
      image: b,
    },
    {
      title: "Real-Time Alerts & Notifications",
      description:
        "Receive real-time alerts on your devices for issues like leaks, low pressure, or abnormal pump behavior.",
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
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white"
      >
        <Typography variant="h2" className="font-bold text-center">
          Smart Pump Management Solutions
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          What is a Smart Pump Management Solution?
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          Smart Pump Management Solutions integrate advanced technology to
          provide seamless control and monitoring of pumping systems. These
          solutions are designed to optimize pump performance, reduce energy
          consumption, and ensure the reliability of critical infrastructure. By
          utilizing IoT sensors, real-time data analytics, and automated control
          systems, smart pump management solutions enhance operational
          efficiency, minimize downtime, and provide peace of mind for
          industries ranging from water treatment to HVAC systems.
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
          Benefits of Smart Pump Management
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
          Smart Pump Management Solutions offer a comprehensive approach to
          managing and optimizing pump operations. These systems allow for
          remote monitoring and control, enabling operators to oversee pump
          performance from any location. By utilizing advanced analytics and IoT
          technology, these solutions provide valuable insights into pump
          operations, helping to identify potential issues before they become
          critical.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          One of the key advantages of smart pump management is its ability to
          optimize energy usage. By continuously monitoring pump performance and
          adjusting operations in real-time, these systems help reduce energy
          consumption and lower operational costs. This not only benefits the
          environment but also provides significant cost savings over time.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Predictive maintenance is another critical feature of smart pump
          management solutions. By analyzing data from sensors and other
          monitoring devices, these systems can predict when maintenance is
          needed, allowing for proactive servicing that minimizes downtime and
          extends the life of the equipment. This approach ensures that pumps
          are always operating at peak efficiency and helps prevent unexpected
          failures.
        </Typography>
      </Box>

      {/* Call to Action Section */}
      <Box className="my-10 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Optimize Your Pump Operations Today
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Discover how Smart Pump Management Solutions can revolutionize your
          operations. Contact us today to learn more about our offerings.
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
