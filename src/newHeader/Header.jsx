import React, { Fragment, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import logo from "https://img.icons8.com/bubbles/344/amazon-alexa-logo.png";
import { theme } from "./Theme";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./header.css";
import Dropdown from "./Dropdown";
import logo from "../img/logo.png";

const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabs: {
    marginLeft: "auto",
    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 20,
    },
    "& .Mui-selected": {
      //   backgroundColor: "#ffbe00",
      backgroundColor: "#fce0a2",
      color: "#000",
      opacity: 0.7,
      borderRadius: 2,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    color: "white",
  },

  hamburgerMenuIcon: {
    height: "50px",
    width: "50px",
  },
  menuIconContainer: {
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
};

const DesktopNavigation = ({ logout }) => {
  const [value, setValue] = useState(0);
  const { isLoggedIn } = useContext(UserContext);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    logout();

    localStorage.clear();
    history.push("/");
  }
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      sx={styles.tabs}
    >
      {/* <Tab sx={styles.tab} label="Home" component={Link} to="/" /> */}
      <Tab sx={styles.tab} label="About Us" component={Link} to="/aboutus" />
      <Tab
        sx={styles.tab}
        label=" Programs for Kids & Adults"
        component={Link}
        to="/programs"
      />
      <Tab sx={styles.tab} label="Business" component={Link} to="/business" />
      <Tab
        sx={styles.tab}
        label="Publications"
        component={Link}
        to="/publications"
      />
      <Tab sx={styles.tab} label="Contact" component={Link} to="/contact" />
      {isLoggedIn
        ? (<>
          <Tab sx={styles.tab} label="Profile" component={Link} to="/profile" />
          <Tab sx={styles.tab} label="Logout" onClick={handleClick} component={Link} to="/" />
        </>) : (<>
          <Tab sx={styles.tab} label="Login" component={Link} to="/login" />
          <Tab sx={styles.tab} label="Signup" component={Link} to="/signup" />
        </>)
      }
      <Dropdown />
    </Tabs>
  );
};

const MobileNavigation = ({ logout }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const handleClick = () => {
    logout();
    history.push("/");
    //   localStorage.clear();
  }

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box sx={styles.toolbarMargin} />
        <Paper>
          <List disablePadding>
            <ListItem
              divider
              button
              component={Link}
              to="/"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/aboutus"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>About Us</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/programs"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>
                {" "}
                Programs for Kids & Adults
              </ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/business"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography> Business</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/publications"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography> Publications</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/contact"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography> Contact</ListItemText>
            </ListItem>
            {isLoggedIn
              ? (<>
                <ListItem
                  divider
                  button
                  component={Link}
                  to="/profile"
                  onClick={() => setOpenDrawer(false)}
                >
                  <ListItemText disableTypography> Profile</ListItemText>
                </ListItem>
                <ListItem
                  divider
                  button
                  component={Link}
                  to="/"
                  onClick={handleClick}
                //   onClick={() => setOpenDrawer(false)}
                >
                  <ListItemText disableTypography> Logout</ListItemText>
                </ListItem>
              </>) : (<>
                <ListItem
                  divider
                  button
                  component={Link}
                  to="/login"
                  onClick={() => setOpenDrawer(false)}
                >
                  <ListItemText disableTypography> Login</ListItemText>
                </ListItem>
                <ListItem
                  divider
                  button
                  component={Link}
                  to="/signup"
                  onClick={() => setOpenDrawer(false)}
                >
                  <ListItemText disableTypography> Signup</ListItemText>
                </ListItem>
              </>)
            }
          </List>
          <Dropdown />
        </Paper>
      </SwipeableDrawer>
      <IconButton
        sx={styles.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={styles.hamburgerMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = ({ logout }) => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        color="secondary"
        elevation={9}
      >
        <Toolbar disableGutters={true}>
          <Button
            disableRipple
            component={Link}
            to="/"
            sx={styles.logoContainer}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                height: "70px",
                width: "70px",
                marginLeft: "30px",
                padding: "10px",
              }}
            />
          </Button>
          {isMobileMode ? <MobileNavigation logout={logout} /> : <DesktopNavigation logout={logout} />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;