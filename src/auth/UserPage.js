import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from 'reactstrap';
import UserContext from "../auth/UserContext";

// import ProfileForm from "../auth/ProfileForm"
import { 
  // BsArrow90DegUp,
   BsPencilSquare }  from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";
import WeatherPage from "../WeatherPage/WeatherPage";
import CountDown from "../tripPage/CountDown";
import Api from "../api";
import FlightDetail from "../flights/FlightDetail";
import useToggle from "../hooks/useToggle";
import ProfileForm from "./ProfileForm";
import HotelDetail from "../hotels/HotelDetail";
import PackingList from "../tripPage/PackingList"
//Profile UserPage shows the user's information that is saved in the backend.
//It also shows the flights / hotels that they have saved to if any. 
//The data is updated upon new flights / hotels being added throughout the app. 
//The user can also choose to update their profile here.


// const UserPage = (props) => {
  const UserPage = (props, updateUser ) => {
    const { isLoggedIn,  applicationIds } = useContext(UserContext);
    const [profile, setProfile] = useState({});
    const [isUpdate, setIsUpdate] = useToggle(false);

  //   const [trip, setTrip] = useState(props.trip);
    
  //   useEffect(() => {
  //     setTripId(trip);
  // }, [trip, tripId]);
    //upon load, the app will get the flights / hotels on the user global profile and add the flight / hotel information to display.
   

    return (
      <section className="container">
          <Card className="J card text-center">
            <CardBody className="text-left">
              <div className="row">
                <div className="d-inline">
                  <h2 className="T display-6 font-weight-bold text-warning"> {`${isLoggedIn.username}`} </h2>
                  <div className="m-0">
                  <Link to="/update" type="ProfileForm"> 
                    <Button className="btn btn-lg btn-info"> <BsPencilSquare /> 
                       {/* Update Profile  */}
                    </Button>
                  </Link>
                  <Link to='/' type="Home">
                    <Button className="btn btn-lg btn-warning float-right"> <BiHomeHeart />
                    </Button>
                  </Link>
                  </div> 
                </div>
              </div>
              <hr/>
              <div className="Home row text-left">
               <div className="col-7">  <h4 className="lead T text-warning font-weight-bold"> Full name: {`${isLoggedIn.firstName} ${isLoggedIn.lastName}`}</h4>
                 <h4 className="lead T text-light font-weight-bold">EMAIL: {`${isLoggedIn.email}`}</h4>
                 <h4 className="lead T text-warning font-weight-bold">My travel notes: </h4>
                 <p controlId="floatingTextarea" className="card font-italic p-2">{`${isLoggedIn.notes}`}</p> 
                 <CountDown 
                //  findTripByUser={findTripByUser}
                //  trip={trip}
                  />
                  {/* <CdTimerComp /> */}
                 </div>
              
                  {isUpdate
                ? <ProfileForm 
                updateUser={updateUser} 
                setProfile={setProfile} 
                setIsUpdate={setIsUpdate}
                />
                : (<>
               <div className="col">
                 <h4 className="lead text-right font-weight-bold">
               <PackingList />
                  </h4>
                  {/* ({trip.length ? 
                 (<Link className="text-warning" to="/mytrip" type="MyTrip"> 
                  Total Trips: {`${trip.length}`} 
                 </Link> ) : ( <p className="card bg-warning font-weight-bold text-center p-2">
                 Sorry, you do not have any saved trips!</p>)}) */}
                 </div>
                 </>) }
             </div>
            </CardBody>
          </Card>
        <br></br>
      <hr></hr>
      <br></br>
      <WeatherPage />
      <br></br>
        </section>
    )
}

export default UserPage;