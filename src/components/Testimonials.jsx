import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import { Container, Box, Grid, Typography, Paper } from "@mui/material";
import { getTestimonials } from "../services/testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        const testimonialsData = await getTestimonials();
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials:", error.message);
      }
    };

    fetchTestimonialsData();
  }, []);

  return (
    <Paper
      sx={{
        backgroundColor: "RGB(245,245,245)",
        px: 4,
        py: 12,
        borderRadius: "12px",
      }}
    >
      <Container maxWidth="auto">
        <Typography
          variant="h4"
          component="h2"
          color="red"
          sx={{ fontWeight: "bold", mb: 6, textAlign: "start" }}
        >
          Testimonials:
        </Typography>
        <Grid container spacing={6}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Testimonial {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default Testimonials;
