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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import rem from "../../../public/images/scms/rtm.webp";
import rtm from "../../../public/images/scms/2.webp";
import cs from "../../../public/images/scms/3.webp";
import ai from "../../../public/images/scms/4.webp";

export default function LearnMorePage() {
  const features: any = [
    {
      title: "Real-Time Monitoring",
      description:
        "Monitor your property in real-time from anywhere in the world with live video feeds accessible via mobile or web apps.",
      image: ai,
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Leverage AI to detect unusual activities, analyze video feeds, and get automated alerts for potential security threats.",
      image: cs,
    },
    {
      title: "Cloud Backup",
      description:
        "Securely store your video recordings in the cloud, ensuring you never lose important footage. Access recordings anytime.",
      image: rtm,
    },
    {
      title: "Smart Notifications",
      description:
        "Receive instant notifications on your mobile devices when the system detects motion, sound, or other predefined events.",
      image: rem,
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
        className="bg-gradient-to-r from-green-400 to-green-600 text-white"
      >
        <Typography variant="h2" className="font-bold text-center">
          Smart Camera Management Solutions
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          What is a Smart Camera Management Solution?
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          Smart Camera Management Solutions provide advanced surveillance
          capabilities, allowing users to monitor, record, and manage video
          feeds across multiple locations. These systems are designed to
          integrate seamlessly with other smart home or business automation
          tools, offering real-time monitoring, AI-powered analytics, cloud
          storage, and more. Whether for residential or commercial use, smart
          camera solutions enhance security and peace of mind.
        </Typography>
      </Box>

      {/* Key Features Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature: any, index: any) => (
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
          Benefits of Smart Camera Management
        </Typography>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {features.map((feature: any, index: any) => (
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
                  className="rounded-md w-96"
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
          Smart Camera Management Solutions utilize cutting-edge technology to
          offer comprehensive security solutions. With AI-driven features, users
          can automatically detect suspicious activities, trigger alarms, and
          review critical footage. The integration with cloud services ensures
          that your data is always safe and accessible, providing flexibility
          and security in managing your surveillance needs.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Modern smart cameras are equipped with features such as night vision,
          high-definition video, and two-way audio, making them versatile tools
          for both home and business security. The ability to control and
          monitor these cameras remotely means you can always keep an eye on
          your property, no matter where you are.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          With seamless integration into existing smart home systems, these
          solutions allow for greater automation and control. You can program
          your cameras to work in tandem with other smart devices, such as
          lights or alarms, creating a fully synchronized security network.
          Whether you need to monitor a single entry point or an entire
          property, Smart Camera Management Solutions provide the flexibility
          and power needed to keep your space secure.
        </Typography>
      </Box>

      {/* Call to Action Section */}
      <Box className="my-10 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Protect What Matters Most
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Ready to enhance your security with Smart Camera Management Solutions?
          Contact us today to find the perfect solution tailored to your needs.
        </Typography>
        <a
          href="/"
          className="inline-flex text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-green-900"
        >
          Contact Us
        </a>
      </Box>
    </Container>
  );
}
