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
import a from "../../../public/images/svms/a.webp";
import b from "../../../public/images/svms/b.webp";
import c from "../../../public/images/svms/c.webp";
import d from "../../../public/images/svms/d.webp";

export default function LearnMorePage() {
  const features = [
    {
      title: "Contactless Check-In",
      description:
        "Enable visitors to check in seamlessly using contactless technology, enhancing safety and efficiency.",
      image: a,
    },
    {
      title: "Pre-Registration",
      description:
        "Allow visitors to pre-register online, speeding up the check-in process and reducing waiting times.",
      image: b,
    },
    {
      title: "Real-Time Visitor Tracking",
      description:
        "Track visitor movements in real-time, ensuring the security and safety of everyone within the premises.",
      image: c,
    },
    {
      title: "Automated Badge Printing",
      description:
        "Print visitor badges automatically upon check-in, providing a smooth and professional experience.",
      image: d,
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
        className="bg-gradient-to-r from-orange-400 to-green-600 text-white"
      >
        <Typography variant="h2" className="font-bold text-center">
          Smart Visitor Management Solutions
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box className="my-10">
        <Typography variant="h4" className="font-bold mb-4">
          What is a Smart Visitor Management Solution?
        </Typography>
        <Typography variant="body1" className="leading-relaxed">
          Smart Visitor Management Solutions are designed to enhance the visitor
          experience while ensuring security and compliance for organizations.
          These systems automate and streamline the check-in process, enable
          contactless interactions, and provide real-time tracking of visitors
          within a facility. Whether for corporate offices, schools, or
          residential complexes, smart visitor management systems offer a
          modern, efficient, and secure way to manage visitor interactions.
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
          Benefits of Smart Visitor Management
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
          Smart Visitor Management Solutions offer a comprehensive approach to
          managing visitors within any facility. These systems allow for the
          pre-registration of visitors, enabling them to quickly check in upon
          arrival. This reduces waiting times and improves the overall visitor
          experience. Additionally, smart visitor management systems can
          integrate with existing security systems to provide real-time tracking
          and monitoring of visitor movements, enhancing the safety of the
          facility.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          The implementation of contactless check-in processes has become
          increasingly important in ensuring the health and safety of both
          visitors and staff. By utilizing QR codes, facial recognition, or
          mobile check-in options, smart visitor management systems reduce the
          need for physical interaction, making the check-in process both quick
          and safe.
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Furthermore, automated badge printing upon check-in ensures that
          visitors are easily identifiable, adding an additional layer of
          security. These badges can be customized with access levels, expiry
          times, and other relevant information. The system can also provide
          detailed reports on visitor history, helping organizations maintain
          accurate records and comply with regulatory requirements.
        </Typography>
      </Box>

      {/* Call to Action Section */}
      <Box className="my-10 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Ready to Enhance Your Visitor Experience?
        </Typography>
        <Typography variant="body1" className="leading-relaxed mb-4">
          Discover how Smart Visitor Management Solutions can streamline your
          operations and improve security. Contact us today to learn more about
          our offerings.
        </Typography>
        <a
          href="/"
          className="inline-flex text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900"
        >
          Contact Us
        </a>
      </Box>
    </Container>
  );
}
