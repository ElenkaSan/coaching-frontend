import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Carousell } from "../common/Carousell";

import "./Homepage.css";
import UserContext from "../auth/UserContext";
// import NoLoggedIn from "./NoLoggedIn";
// import { FaGithubAlt } from "react-icons/fa";
// import { AiFillLinkedin } from "react-icons/ai";

import findTrip from "../img/mytrip.png";

// Home component is the splash page for the app.
// It will render a login/signup elements if the user is not logged.
// It will render User profile page and Trip page elements if the user is logged id.
// This also the default for any redirects and broken links

const Homepage = () => {
  const { isLoggedIn } = useContext(UserContext);
  console.debug("Homepage", "isLoggedIn=", isLoggedIn);

  return (
    <>
      <Carousell />
    </>
  );
};

export default Homepage;
