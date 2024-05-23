import {
  Container,
  Grid,
  Typography,
  Paper,
  IconButton,
  Skeleton,
} from '@mui/material';
import { getRecipes } from '../services/recipe';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Recipe from '../components/Recipe';

const Recipes = () => {
  const navigate = useNavigate();

  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
  });

  if (isLoading) {
    return (
      <Paper
        sx={{
          backgroundColor: 'RGB(245,245,245)',
          px: 4,
          py: 12,
          borderRadius: '12px',
        }}
      >
        <Container maxWidth="auto">
          <IconButton
            onClick={() => navigate('/')}
            sx={{ mb: 2 }}
            disableRipple
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="h2"
            color="red"
            sx={{ fontWeight: 'bold', mb: 6, textAlign: 'start' }}
          >
            Recipes:
          </Typography>
          <Grid container spacing={6}>
            {Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{ borderRadius: '12px' }}
                />
                <Skeleton width="60%" sx={{ mt: 2 }} />
                <Skeleton width="80%" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    );
  }

  if (error) {
    return <Typography>Error loading recipes: {error.message}</Typography>;
  }

  return (
    <Paper
      sx={{
        backgroundColor: 'RGB(245,245,245)',
        px: 4,
        py: 12,
        borderRadius: '12px',
      }}
    >
      <Container maxWidth="auto">
        <IconButton onClick={() => navigate('/')} sx={{ mb: 2 }} disableRipple>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h4"
          component="h2"
          color="red"
          sx={{ fontWeight: 'bold', mb: 6, textAlign: 'start' }}
        >
          Recipes:
        </Typography>
        <Grid container spacing={6}>
          {recipes?.map((recipe, index) => (
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
