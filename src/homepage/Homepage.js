import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import "./Homepage.css";
import UserContext from "../auth/UserContext";
// import NoLoggedIn from "./NoLoggedIn";
// import { FaGithubAlt } from "react-icons/fa";
// import { AiFillLinkedin } from "react-icons/ai";

import findTrip from '../img/mytrip.png';

// Home component is the splash page for the app. 
// It will render a login/signup elements if the user is not logged.
// It will render User profile page and Trip page elements if the user is logged id.
// This also the default for any redirects and broken links

const Homepage = () => {
  const { isLoggedIn } = useContext(UserContext);
  console.debug("Homepage", "isLoggedIn=", isLoggedIn);


return (
  <section className="container">
    <Card className="J card text-center">
      <CardBody className="text-center">
        {isLoggedIn
          ? (<>         
            <CardTitle>
              <h2 className="T text-info font-weight-bold"> {`Welcome ${isLoggedIn.username}!`} </h2>
              <hr />
            </CardTitle>
            <CardText>
              <div className="card bg-light p-2">
                <h5 className=""> 
                  Thank you for creating an account. Find the best vacation for yourself. 
                </h5>
                <h5 className="text-left">
                   Info coming .....
                </h5>
              </div>
            </CardText>
            <div className="row">
            <br></br>
            </div>
          </>) : (<> 
            <CardTitle>
              <h2 className="T font-weight-bold font-italic text-light">
              Welcome to Coach Anna Rubleva!
              </h2>
            </CardTitle>
            <hr />
            <div  className="col-m-10">
              {/* <div  className="card bg-secondary">  */}
                {/* <img src={''} className="card-img-top img-thumbnail" alt="anna's coach center photo" /> */}
                  <div  className="card-body text-light">
                    <h5  className="card-title font-weight-bold">Our comminity and school of coach Anna Rubleva about professional coaching for students & adults, personal coaching for kids, and corporate business training</h5>
                      {/* <p  className="card-text text-left">
                       Our comminity and school of coach Anna Rubleva about professional coaching for students & adults, personal coaching for kids, and corporate business training
                      </p> */}
                      <CardText>
                      {/* <p className="fw-semibold">
                        Check the Weather Forecast: &nbsp;
                        <Link className="" to="/weather" type="weather"> 
                        <img src={findTrip} alt="weather" style={{ height:'30px', width:'30px'}} /> </Link>
                        <br></br>
                      </p>  */}
                      {/* <NoLoggedIn /> */}
                      </CardText>
                  </div>
              {/* </div> */}
            </div>
            </>) } 
      </CardBody>
    </Card>
    <br></br>
  </section>
)
}

export default Homepage;
