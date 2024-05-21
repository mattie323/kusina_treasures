import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Recipe = ({ title, description }) => {
  return (
    <Card sx={{ backgroundColor: "white", borderRadius: "12px", boxShadow: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
            {title}
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
export default Recipe;
