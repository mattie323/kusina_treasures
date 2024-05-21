import { NavLink } from "react-router-dom";
import { Typography, IconButton, Link, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import cookingLogo from "../images/cooking.png";

const DesktopNav = () => {
  // Styled link with MUI system
  const NavbarLink = styled(Link)(({ theme }) => ({
    color: "#FFC107",
    textDecoration: "none",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      textDecoration: "underline",
      paddingTop: "5px",
    },
    "&.active": {
      textDecoration: "underline",
    },
  }));

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        component={NavLink}
        to="/"
        disableRipple={true}
      >
        <img
          className="w-10 h-10"
          src={cookingLogo}
          alt="kusina-treasure-logo"
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            marginLeft: 2,
            display: { xs: "block", md: "block" },
            color: "#FFC107",
          }}
        >
          Kusina Treasures
        </Typography>
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
        <NavbarLink
          to="/"
          component={NavLink}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavbarLink>
        <NavbarLink
          to="/recipes"
          component={NavLink}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Recipes
        </NavbarLink>
      </Box>
    </>
  );
};
export default DesktopNav;
