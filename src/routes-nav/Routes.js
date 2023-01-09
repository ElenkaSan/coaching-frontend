import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";
import Business from "../components/Business";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../auth/ProfileForm";
import UserPage from "../auth/UserPage.js";
import UserContext from "../auth/UserContext";
import WeatherPage from "../WeatherPage/WeatherPage";

// React Router will help navigate different routes for the vacation time app
// based on whether the user is logged in or not.
// This will prevent users from access unauthorized paths.

const Routes = ({ login, signup, updateUser }) => {
  const { isLoggedIn } = useContext(UserContext);

  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );

  return (
    <div className="">
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/programs">
              {" "}
              <Programs />{" "}
            </Route>
            <Route path="/business">
              {" "}
              <Business />{" "}
            </Route>
            <Route path="/publications">
              {" "}
              <Publications />{" "}
            </Route>
            <Route path="/contact">
              {" "}
              <Contact />{" "}
            </Route>
            <Route path="/profile">
              {" "}
              <UserPage />{" "}
            </Route>
            <Route path="/update">
              {" "}
              <ProfileForm updateUser={updateUser} />{" "}
            </Route>
            <Route path="/weather" component={WeatherPage} />
            <Redirect to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              {" "}
              <Homepage />{" "}
            </Route>
            <Route exact path="/aboutus">
              {" "}
              <AboutUs />{" "}
            </Route>
            <Route exact path="/programs">
              {" "}
              <Programs />{" "}
            </Route>
            <Route exact path="/business">
              {" "}
              <Business />{" "}
            </Route>
            <Route exact path="/publications">
              {" "}
              <Publications />{" "}
            </Route>
            <Route exact path="/contact">
              {" "}
              <Contact />{" "}
            </Route>
            <Route exact path="/signup">
              {" "}
              <SignupForm signup={signup} />{" "}
            </Route>
            <Route exact path="/login">
              {" "}
              <LoginForm login={login} />{" "}
            </Route>
            <Route path="/weather" component={WeatherPage} />
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </div>
  );
};

export default Routes;
