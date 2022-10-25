import React, { useState, useEffect, useContext } from "react";
import UserContext from "../auth/UserContext";
import AmadeusApi from "../amadeusApi";
import SearchFlights from "./SearchFlights";
import FlightDetail from "./FlightDetail";
// import LoadingSpinner from "../common/LoadingSpinner";
import Alert from 'react-bootstrap/Alert'
import './flight.css'

//AddFlight component renders all flights that are in the Api Amadeus.
//  app backend database. 
//A user can filter using the inputs in the child component "SearchFlights".
//A user can also click on a button to safe hotel such as remove this hotel.
//If a user has saved, the hotel info card will show it has been saved to and will show the remove button.

const AddFlight = () => {
    const { isLoggedIn } = useContext(UserContext);
    const [flights, setFlights] = useState([]);
    const [show, setShow] = useState(true);
    // const [hasErrors, setHasErrors] = useState(false);
    const [hasErrors, setHasErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (localStorage.getItem("flights")){
        setFlights(JSON.parse(localStorage.getItem("flights")));
      }
    },[]);
  
    useEffect(() => {
      if (isLoggedIn) {
        localStorage.setItem("flights", JSON.stringify(flights));
        // setIsLoggedIn(true)
      } 
      else if (!isLoggedIn) {
        // setIsLoggedIn(false)
        localStorage.removeItem("flights");
      }
    }, [flights, isLoggedIn]);

    // let hours = 120; // 120 - 5 days 
    // // to clear the localStorage after 120 hour
    // let now = new Date().getTime();
    // let setupTime = localStorage.getItem('setupTime');
    // if (setupTime == null) {
    //    localStorage.setItem('setupTime', now)
    //   //  setIsLoading(false)
    // } else {
    // if(now-setupTime > hours*60*60*1000) {
    //   localStorage.clear()
    //   localStorage.setItem('setupTime', now);
    //   }
    // }

    //upon intial render, get all around flights 
    const  flightSearchAround = async (formData) => {
        try {
            setIsLoading(true)
            let flightTwoWay = await AmadeusApi.getFlightAround(formData.originLocationCode,
                                                                formData.destinationLocationCode, 
                                                                formData.departureDate,
                                                                formData.returnDate,
                                                                formData.adults);
            console.log("FLIGHTsAround",flightTwoWay);
            setFlights(flightTwoWay);
            setIsLoading(false)
        }
        catch (e) {
            console.log(e.message);
            setShow(true);
            errorMessage(hasErrors);
            setIsLoading(false)
        }
    }

     //upon intial render, get all one way flights 
    const flightSearchOneway = async (formData) => {
        try {
            setIsLoading(true)
            let flightOneWay = await AmadeusApi.getFlightOneway(formData.originLocationCode,
                                                                formData.destinationLocationCode, 
                                                                formData.departureDate,
                                                                formData.adults);
            console.log("FLIGHTsONEway",flightOneWay);
            setFlights(flightOneWay);
            setIsLoading(false)
            }
        catch (e) {
            console.log(e.message);
            setShow(true);
            errorMessage(hasErrors)
            setIsLoading(false)
        }
    }

    function errorMessage(hasErrors) {
      setShow(true)
      if (hasErrors) {
        setHasErrors('Sorry, no results were found!')
      } else {
        setHasErrors('Sorry, it is still looking for flights!');
      }
    }

    return (
        <div className="p-4">
          <SearchFlights 
            flightSearchOneway={flightSearchOneway}
            flightSearchAround={flightSearchAround}
          />
          {isLoading ? (
            <div className="card col-md-6 offset-md-3 text-warning lead font-weight-bold J text-center p-2">
              Loading ... Please wait
              <div className="d-flex justify-content-center"> 
                <div className="spinner-border" role="status">
                  <span className="visually-hidden text-center" loading={isLoading}> Loading...</span>
                </div>
              </div>
            </div>
          ) : (
          <>
            {flights.data ? ( 
              <div className="text-light">
                {flights.data.length === 0 ? ( 
                  <p show={show} className="card p-2 bg-danger lead font-weight-bold col-md-8 offset-md-2 text-center">
                   Sorry, there are {flights.data.length} flight results! </p>
                ) : null}
                 {flights.data.map(flight => (
                  <FlightDetail key={flight.id} flight={flight} />
                 ))} 
              </div> 
             ) : ( 
               <>
                {hasErrors && 
                  <Alert show={show} hasErrors={hasErrors} className="J text-warning lead font-weight-bold text-center col-md-8 offset-md-2 p-2"> 
                    <div className="fade show">
                     <p> 
                      {hasErrors}
                     </p>
                    </div>
                  </Alert>}
                </>
              )};
           <br/>
        </>  
      )}
    </div>
  )
}

export default AddFlight;