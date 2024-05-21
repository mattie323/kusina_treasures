import { useState, useEffect } from "react";
import Recipe from "../components/Recipe";
import { Container, Grid, Typography, Paper, IconButton } from "@mui/material";
import { getRecipes } from "../services/recipe";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const recipesData = await getRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
      }
    };

    fetchRecipesData();
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
        <IconButton onClick={() => navigate("/")} sx={{ mb: 2 }} disableRipple>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h4"
          component="h2"
          color="red"
          sx={{ fontWeight: "bold", mb: 6, textAlign: "start" }}
        >
          Recipes:
        </Typography>
        <Grid container spacing={6}>
          {recipes.map((recipe, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Recipe {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default Recipes;
