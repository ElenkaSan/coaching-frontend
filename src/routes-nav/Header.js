// import * as React from "react";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
// import { Link } from 'react-router-dom';

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./component.css";

import UserContext from "../auth/UserContext";
import logo from '../img/logo.png';

function Header({ logout }) {
  const { isLoggedIn } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  // const handleChange = (event) => {};

  const history = useHistory();
  const handleClick = () => {
      logout();
      history.push("/");
    //   localStorage.clear();
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <Box sx={{ flexGrow: "inherit" }} className="mainbox">
      <AppBar className="secondBox">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Typography variant="h6" component="div" style={{ color: "skyblue" }}>
            <h3> <img src={logo} alt="logo" style={{ height:'70px', width:'70px'}} /> </h3>
          </Typography>
          {isLoggedIn
                ? (<>
          <div>
            {mobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link href="/" type="HomePage">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                  </Link>
                  <Link href="/aboutus" type="AboutUs">
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                  </Link>
                  <Link href="/programs" type="Programs">
                    <MenuItem onClick={handleClose}>
                      Programs for Kids & Adults
                    </MenuItem>
                  </Link>
                  <Link href="/business" type="Business">
                    <MenuItem onClick={handleClose}>Business</MenuItem>
                  </Link>
                  <Link href="/publications" type="Publications">
                    <MenuItem onClick={handleClose}>Publications</MenuItem>
                  </Link>
                  <Link href="/contact" type="Contact">
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </Link>
                  <Link href="/profile" type="login">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <Link href="/" type="logout">
                    <MenuItem onClick={handleClick}>Logout</MenuItem>
                  </Link>
                </Menu>
              </>
            ) : (
              <div className="navBar">
                <Button
                  component={Link}
                  href="/"
                  type="HomePage"
                  variant="contained"
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  href="/aboutus"
                  type="AboutUs"
                  variant="contained"
                >
                  About Us
                </Button>
                <Button
                  component={Link}
                  href="/programs"
                  type="Programs"
                  variant="contained"
                >
                  Programs for Kids & Adults
                </Button>
                <Button
                  component={Link}
                  href="/business"
                  type="Business"
                  variant="contained"
                >
                  Business
                </Button>
                <Button
                  component={Link}
                  href="/publications"
                  type="Publications"
                  variant="contained"
                >
                  Publications
                </Button>
                <Button
                  component={Link}
                  href="/profile"
                  type="profile"
                  Click={handleClose}
                >
                  Profile
                </Button>
                <Button
                  component={Link}
                  href="/"
                  type="logout"
                  Click={handleClose}
                >
                  Logout
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  type="Contact"
                  variant="contained"
                >
                  Contact
                </Button>
                <Button component={Link} variant="contained">
                  Eng/Rus
                </Button>
              </div>
            )}
          </div>
          </>) : (<>
            <div>
            {mobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link href="/" type="HomePage">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                  </Link>
                  <Link href="/aboutus" type="AboutUs">
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                  </Link>
                  <Link href="/programs" type="Programs">
                    <MenuItem onClick={handleClose}>
                      Programs for Kids & Adults
                    </MenuItem>
                  </Link>
                  <Link href="/business" type="Business">
                    <MenuItem onClick={handleClose}>Business</MenuItem>
                  </Link>
                  <Link href="/publications" type="Publications">
                    <MenuItem onClick={handleClose}>Publications</MenuItem>
                  </Link>
                  <Link href="/contact" type="Contact">
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </Link>
                  <Link href="/login" type="login">
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                  </Link>
                  <Link href="/signup" type="signup">
                    <MenuItem onClick={handleClick}>SignUp</MenuItem>
                  </Link>
                </Menu>
              </>
            ) : (
              <div className="navBar">
                <Button
                  component={Link}
                  href="/"
                  type="HomePage"
                  variant="contained"
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  href="/aboutus"
                  type="AboutUs"
                  variant="contained"
                >
                  About Us
                </Button>
                <Button
                  component={Link}
                  href="/programs"
                  type="Programs"
                  variant="contained"
                >
                  Programs for Kids & Adults
                </Button>
                <Button
                  component={Link}
                  href="/business"
                  type="Business"
                  variant="contained"
                >
                  Business
                </Button>
                <Button
                  component={Link}
                  href="/publications"
                  type="Publications"
                  variant="contained"
                >
                  Publications
                </Button>
                <Button
                  component={Link}
                  href="/login"
                  type="Login"
                  Click={handleClose}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  href="/signup"
                  type="Signup"
                  Click={handleClose}
                >
                  Signup
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  type="Contact"
                  variant="contained"
                >
                  Contact
                </Button>
                <Button component={Link} variant="contained">
                  Eng/Rus
                </Button>
              </div>
            )}
          </div>
            </>)
                }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;