import React, { useContext, useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Homepage from "../homepage/Homepage"
import AddHotel from "../hotels/AddHotel"
import AddFlight from "../flights/AddFlight"

import SignupForm from "../auth/SignupForm"
import LoginForm from "../auth/LoginForm"
import ProfileForm from "../auth/ProfileForm"
import UserPage from "../auth/UserPage"
import UserContext from "../auth/UserContext"
import WeatherPage from "../WeatherPage/WeatherPage";

// React Router will help navigate different routes for the vacation time app
// based on whether the user is logged in or not. 
// This will prevent users from access unauthorized paths. 

  const Routes = ({ login, signup, updateUser }) => {

  const { isLoggedIn } = useContext(UserContext);

  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <Switch>
        {isLoggedIn
                ? (<>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/flights">
            <AddFlight />
          </Route>
         <Route exact path="/hotels">
             <AddHotel />
          </Route>
          <Route path="/profile">
            <UserPage />
          </Route>
          <Route path="/update">
              <ProfileForm updateUser={updateUser} />
            </Route>
          <Route path="/weather" component={WeatherPage} />
          <Redirect to="/" /> 
          </>) : (<>
          <Route exact path="/flights">
            <AddFlight />
          </Route>
          <Route exact path="/hotels">
            <AddHotel />
          </Route>
          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>
          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/weather" component={WeatherPage} />
          <Redirect to="/" />
          </>)
            }
        </Switch>
      </div>
  );
}

export default Routes;
