import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from 'reactstrap';
import UserContext from "../auth/UserContext";
import {
  //  FcEditImage
  // BsArrow90DegUp,
   BsPencilSquare
   }  from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";
import WeatherPage from "../WeatherPage/WeatherPage";
// import CountDown from "../tripPage/CountDown";
import useToggle from "../hooks/useToggle";
import ProfileForm from "./ProfileForm";
import PackingList from "../tripPage/PackingList"
import CountDownTrip from "../tripPage/CountDownTrip"

//Profile UserPage shows the user's information that is saved in the backend.
//It also shows the flights / hotels that they have saved to if any. 
//The data is updated upon new flights / hotels being added throughout the app. 
//The user can also choose to update their profile here.


  const UserPage = (props, updateUser, Adding ) => {
    const { isLoggedIn } = useContext(UserContext);
    const [isUpdate, setIsUpdate] = useToggle(false);


    return (
      <section className="container">
          <Card className="J card text-center">
            <CardBody className="text-left">
              <div className="row">
                <div className="d-inline">
                  <h2 className="T display-6 font-weight-bold text-info"> {`${isLoggedIn.username}`} </h2>
                  <div className="m-0">
                  <Link to="/update" type="ProfileForm"> 
                    <Button className="btn btn-lg btn-outline-warning"> 
                    {/* <FcEditImage /> */}
                    <BsPencilSquare /> 
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
               <div className="col">  <h4 className="lead T text-warning font-weight-bold"> Full name: {`${isLoggedIn.firstName} ${isLoggedIn.lastName}`}</h4>
                 <h4 className="lead T text-light font-weight-bold">EMAIL: {`${isLoggedIn.email}`}</h4>
                 <br></br>
                 {/* <CountDown /> */}
                 <PackingList setIsUpdate={setIsUpdate}
                 Adding={Adding} />
                 </div>
                  {isUpdate
                ? <ProfileForm 
                updateUser={updateUser} 
                setIsUpdate={setIsUpdate}
                />
                : (<>
               <div className="col">
                 <h4 className="text-right font-weight-bold">
                 {/* <CountDown /> */}
                 <br/>
                 <CountDownTrip />
                  </h4>
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