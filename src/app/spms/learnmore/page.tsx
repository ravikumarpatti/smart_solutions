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
import a from "../../../public/images/spms/a.webp";
import b from "../../../public/images/spms/b.webp";
import c from "../../../public/images/spms/c.webp";
import d from "../../../public/images/spms/d.webp";

export default function LearnMorePage() {
  const features = [
    {
      title: "Real-Time Parking Availability",
      description:
        "Provide drivers with real-time parking availability information, reducing the time spent searching for a spot and improving traffic flow.",
      image: d,
    },
    {
      title: "Automated Payment Systems",
      description:
        "Enable seamless payment options through mobile apps or automated kiosks, making the parking process more efficient and user-friendly.",
      image: c,
    },
    {
      title: "License Plate Recognition",
      description:
        "Utilize advanced license plate recognition technology to automate entry and exit, enhance security, and provide a hassle-free parking experience.",
      image: b,
    },
    {
      title: "Security & Surveillance",
      description:
        "Implement comprehensive security and surveillance systems to monitor parking areas, ensuring safety for vehicles and drivers alike.",
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
        className="bg-gradient-to-r from-green-400 to-blue-600 text-white"
      >
        <Typography variant="h2" className="font-bold text-center">
          Smart Parking Management Systems
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          What is a Smart Parking Management System?
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          Smart Parking Management Systems leverage advanced technology to
          optimize the use of parking spaces, improve traffic flow, and enhance
          the user experience. These systems integrate real-time data, automated
          payment options, security features, and more, providing a seamless and
          efficient solution for both drivers and parking operators. Whether for
          commercial complexes, residential areas, or city-wide implementations,
          smart parking systems offer a modern approach to managing parking
          infrastructure.
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
          Benefits of Smart Parking Management
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
                  width={200}
                  height={100}
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
          Smart Parking Management Systems provide a comprehensive solution to
          the challenges of parking in busy urban environments. By using
          sensors, cameras, and software, these systems monitor parking
          availability in real-time, guiding drivers to the nearest available
          spots and reducing the congestion caused by vehicles circling for
          parking. The integration of automated payment systems allows for a
          cashless, paperless experience, improving efficiency for both drivers
          and operators.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          License plate recognition technology further enhances the user
          experience by automating entry and exit processes, reducing wait
          times, and increasing security. In addition to improving the parking
          experience, smart systems also collect valuable data that can be used
          to optimize parking operations, forecast demand, and make informed
          decisions about infrastructure investments.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          The adoption of Smart Parking Management Systems is not only
          beneficial for users but also for cities and businesses. By
          streamlining the parking process, these systems help reduce traffic
          congestion, lower emissions from idling vehicles, and maximize the use
          of existing parking spaces. For businesses, the ability to offer a
          better parking experience can lead to increased customer satisfaction
          and loyalty.
        </Typography>
      </Box>

      {/* Call to Action Section */}
      <Box className="my-10 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Transform Your Parking Infrastructure
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Discover how Smart Parking Management Systems can revolutionize your
          parking operations. Contact us today to learn more about our
          solutions.
        </Typography>
        <a
          href="/"
          className="inline-flex text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900"
        >
          Contact Us
        </a>
      </Box>
    </Container>
  );
}
