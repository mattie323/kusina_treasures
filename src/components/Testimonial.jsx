import { Box, Card, CardContent, Typography, Rating } from "@mui/material";

const Testimonial = ({ name, rating, description }) => {
  return (
    <Card sx={{ backgroundColor: "white", borderRadius: "12px", boxShadow: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Rating: <Rating name="read-only" value={rating} readOnly />
          </Typography>
        </Box>
        <Box sx={{ mb: 5 }}>
          <Typography sx={{ fontWeight: "bold" }}>Description:</Typography>
          <Typography>{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
