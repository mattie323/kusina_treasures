import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Rating,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addTestimonial } from "../services/testimonial";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  rating: yup
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot be more than 5")
    .required("Rating is required"),
});

const AddTestimonialPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addTestimonialMutation = useMutation({
    mutationFn: addTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
      setAlert({
        open: true,
        severity: "success",
        message: "Testimonial added successfully!",
      });
      setTimeout(() => navigate("/"), 2000);
    },
    onError: (error) => {
      setAlert({
        open: true,
        severity: "error",
        message: `Error: ${error.message}`,
      });
    },
  });

  const onSubmit = (data) => {
    addTestimonialMutation.mutate(data);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ ...alert, open: false });
  };

  return (
    <Paper sx={{ backgroundColor: "red.50", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{ backgroundColor: "white", p: 4, mb: 4, borderRadius: "12px" }}
        >
          <IconButton component={Link} to="/" sx={{ mb: 2 }} disableRipple>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add Testimonial:
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="eg. Jane Doe"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              placeholder="Add your description here"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              sx={{ marginBottom: 4 }}
            />

            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Typography component="legend" sx={{ mr: 2 }}>
                Rating: {errors.rating?.message}
              </Typography>
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                  setValue("rating", newValue);
                }}
              />
            </Box>

            <div style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: "24px" }}
                type="submit"
              >
                Save Testimonial
              </Button>
            </div>
          </form>
        </Paper>
      </Container>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AddTestimonialPage;
