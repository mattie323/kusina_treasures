import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import filipinoFoods from "../images/filipinofoods.jpg";

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${filipinoFoods})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: theme.spacing(10, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "left",
  backgroundBlendMode: "multiply", // blend the background color and image
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "RGB(245,245,245,.9)", // yellow background with some transparency
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  maxWidth: "800px",
}));

const Hero = () => {
  return (
    <HeroContainer>
      <Container maxWidth="auto">
        <ContentBox>
          <Typography
            variant="h1"
            component="h1"
            color="#D32F2F"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
            }}
          >
            Discover, Save, and Savor Authentic Filipino Recipes
          </Typography>
          <Typography variant="h6" component="p" color="#757575" gutterBottom>
            Your Ultimate Companion for Capturing the Rich Flavors of Pinoy
            Cuisine
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2, // Add gap between buttons
              marginTop: 2,
            }}
          >
            <Button
              component={RouterLink}
              to="/add-recipe"
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "#FFC107",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Add Recipe
            </Button>
            <Button
              component={RouterLink}
              to="/add-testimonial"
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "#FFC107",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Add Testimonial
            </Button>
          </Box>
        </ContentBox>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
