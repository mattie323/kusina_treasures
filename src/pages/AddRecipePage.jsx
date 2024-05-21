import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { addRecipe } from "../services/recipe";

const schema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

const AddRecipePage = () => {
  // routing
  const navigate = useNavigate();

  // Query and Mutation
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const addRecipeMutation = useMutation({
    mutationFn: addRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
      setAlert({
        open: true,
        severity: "success",
        message: "Recipe added successfully!",
      });
      setTimeout(() => navigate("/recipes"), 3000); // Delayed navigation to allow users to see the success message
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
    addRecipeMutation.mutate(data);
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
            Add Recipe:
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Recipe Title"
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="eg. How To Make Lumpia (HTML)"
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              placeholder="Add your description here"
              sx={{ marginBottom: 4 }}
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />

            <div style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: "24px" }}
                type="submit"
              >
                Save Recipe
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

export default AddRecipePage;
