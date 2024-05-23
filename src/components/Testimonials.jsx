import { Container, Grid, Typography, Paper, Skeleton } from '@mui/material';
import { getTestimonials } from '../services/testimonial';
import { useQuery } from '@tanstack/react-query';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const {
    data: testimonials,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
  });

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
        <Typography
          variant="h4"
          component="h2"
          color="red"
          sx={{ fontWeight: 'bold', mb: 6, textAlign: 'start' }}
        >
          Testimonials:
        </Typography>
        <Grid container spacing={6}>
          {isLoading ? (
            Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            ))
          ) : error ? (
            <Typography>Error loading testimonials: {error.message}</Typography>
          ) : (
            testimonials?.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Testimonial {...testimonial} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Paper>
  );
};

export default Testimonials;
