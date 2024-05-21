import { AppBar, Toolbar } from "@mui/material";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#D32F2F", borderBottom: "1px solid #D32F2F" }}
    >
      <Toolbar>
        <MobileNav />
        <DesktopNav />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
