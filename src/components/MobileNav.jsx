import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NoteIcon from "@mui/icons-material/Note";
import QueueIcon from "@mui/icons-material/Queue";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
const MobileNav = () => {
  // State
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  //Methods
  const toggleDrawer = (newOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(newOpen);
  };

  const handleExpandClick = (event) => {
    // Stop event propagation to avoid closing the drawer
    event.stopPropagation();
    setExpand(!expand);
  };
  return (
    <>
      <IconButton
        sx={{
          color: "#FFC107",
          display: { xs: "flex", md: "none" },
          marginRight: "10px",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiPaper-root": { backgroundColor: "#D32F2F" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Typography
              variant="h6"
              component="div"
              sx={{
                margin: 2,
                color: "#FFC107",
              }}
            >
              Kusina Treasures
            </Typography>

            <ListItem>
              <ListItemButton component={NavLink} to="/" disableRipple>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "#FFC107" }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={NavLink} to="/recipes" disableRipple>
                <ListItemIcon>
                  <NoteIcon sx={{ color: "#FFC107" }} />
                </ListItemIcon>
                <ListItemText primary="Recipes" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={handleExpandClick} disableRipple>
                <ListItemIcon>
                  <QueueIcon sx={{ color: "#FFC107" }} />
                </ListItemIcon>
                <ListItemText primary="Add" />
                {expand ? (
                  <ExpandLess sx={{ color: "#FFC107" }} />
                ) : (
                  <ExpandMore sx={{ color: "#FFC107" }} />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={expand} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 5 }}
                    component={NavLink}
                    to="/add-recipe"
                  >
                    <ListItemIcon>
                      <PostAddIcon sx={{ color: "#FFC107" }} />
                    </ListItemIcon>
                    <ListItemText primary="Recipe" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 5 }}
                    component={NavLink}
                    to="/add-testimonial"
                  >
                    <ListItemIcon>
                      <ThumbUpIcon sx={{ color: "#FFC107" }} />
                    </ListItemIcon>
                    <ListItemText primary="Testimonial" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default MobileNav;
