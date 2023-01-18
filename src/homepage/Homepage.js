import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Carousell } from "../common/Carousell";

import "./Homepage.css";
import UserContext from "../auth/UserContext";
import NoLoggedIn from "./NoLoggedIn";
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
      <section className="container p-5">
      <Card className="card bg-light text-center">
        <CardBody className="text-center">
          {/* {isLoggedIn
          ? (<>         
            <CardTitle>
              <h2 className="T text-info font-weight-bold"> {`Welcome ${isLoggedIn.username}!`} </h2>
              <hr />
            </CardTitle>
            <CardText>
              <div className="card bg-light p-2">
                <h5 className=""> 
                 Coach Website Loggin user
                </h5>
              </div>
            </CardText>
          </>) : (<>  */}
          <CardTitle>
            <h2 className="font-weight-bold font-italic text-warning">
              Welcome to Coach Anna Rubleva!
            </h2>
          </CardTitle>
          <CardText>
            <NoLoggedIn />
          </CardText>
          {/* </>) }  */}
        </CardBody>
      </Card>
      {/* <div className="footer">
    </div> */}
    </section>
    </>
  );
};

export default Homepage;
