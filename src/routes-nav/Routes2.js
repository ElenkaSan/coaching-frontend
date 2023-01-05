import React, { useContext } from "react"
// import { Switch, Route, Redirect } from "react-router-dom"
import { Switch, Route, Redirect } from "react-router";
import Homepage from "../homepage/Homepage";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";
import Business from "../components/Business";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

import SignupForm from "../auth/SignupForm"
import LoginForm from "../auth/LoginForm"
import ProfileForm from "../auth/ProfileForm"
import UserPage from "../auth/UserPage"
import UserContext from "../auth/UserContext"
import WeatherPage from "../WeatherPage/WeatherPage";


const Routes = ({ login, signup, updateUser }) => {

  const { isLoggedIn } = useContext(UserContext);


  return (
    <div className="pt-5">
      {/* <Routes> */}
       <Switch>
      {isLoggedIn
        ? (<>
        <Route index path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/update" element={<ProfileForm updateUser={updateUser} />} />
       </>) : (<>
        <Route index path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/weather" component={WeatherPage} />
        <Redirect to="/" />
      </>)
    }
   </Switch>
     {/* </Routes> */}

    {/* <Switch>
      {isLoggedIn
        ? (<>
        <Route exact path="/"> <Homepage /> </Route>
        <Route path="/aboutus" > <AboutUs /> </Route>
        <Route path="/programs"> <Programs /> </Route>
        <Route path="/business" > <Business /> </Route>
        <Route path="/publications"> <Publications />  </Route>
        <Route path="/contact"> <Contact /> </Route>
        <Route path="/profile" > <UserPage /> </Route>
        <Route path="/update" > <ProfileForm updateUser={updateUser} /> </Route>
        <Route path="/weather" component={WeatherPage} />
        <Redirect to="/" /> 
      </>) : (<>
        <Route exact path="/"> <Homepage /> </Route>
        <Route exact path="/aboutus" > <AboutUs /> </Route>
        <Route exact path="/programs"> <Programs /> </Route>
        <Route exact path="/business" > <Business /> </Route>
        <Route exact path="/publications"> <Publications />  </Route>
        <Route exact path="/contact"> <Contact /> </Route>
        <Route exact path="/signup"> <SignupForm signup={signup} /> </Route>
        <Route exact path="/login"> <LoginForm login={login} /> </Route>
        <Route path="/weather" component={WeatherPage} />
        <Redirect to="/" />
      </>)
    }
   </Switch> */}

 </div>
  );
}
     


export default Routes;