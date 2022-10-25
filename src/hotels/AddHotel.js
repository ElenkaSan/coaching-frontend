import React, { useState, useEffect, useContext } from "react";
import UserContext from "../auth/UserContext";
import AmadeusApi from "../amadeusApi";
import HotelDetail from "./HotelDetail";
import SearchHotels from "./SearchHotels";
// import LoadingSpinner from "../common/LoadingSpinner";
import Alert from 'react-bootstrap/Alert'
import '../flights/flight.css'
import "toasted-notes/src/styles.css";

//AddHotel component renders all hotels that are in the Api Amadeus.
//  app backend database. 
//A user can filter using the inputs in the child component "SearchHotels".
//A user can also click on a button to safe hotel such as remove this hotel.
//If a user has saved, the hotel info card will show it has been saved to and will show the remove button.

const AddHotel = () => {
    const { isLoggedIn } = useContext(UserContext);
    const [hotels, setHotels] = useState([]);
    const [show, setShow] = useState(true);
    // const [hasErrors, setHasErrors] = useState(false);
    const [hasErrors, setHasErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (localStorage.getItem("hotels")){
        setHotels(JSON.parse(localStorage.getItem("hotels")));
      }
    },[]);
  
    useEffect(() => {
      if (isLoggedIn) {
        localStorage.setItem("hotels", JSON.stringify(hotels));
        // setIsLoggedIn(true)
        } 
        else if (!isLoggedIn) {
          // setIsLoggedIn(false)
          localStorage.removeItem("hotels");
        }
    }, [hotels, isLoggedIn]);

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

    //upon initial load, show all hotels for the choosen dates.
    const findHotels = async (formData) => {
        try {
            setIsLoading(true)
            let res = await AmadeusApi.getHotelByCity(formData.cityCode, 
                                                      formData.checkInDate,
                                                      formData.checkOutDate);
            console.log("Hotels", res)
            setHotels(res);
            setIsLoading(false)
          }
         catch (e) {
          console.error(e.message);
          setShow(true);
          setHasErrors('Sorry, no results were found!');
          // setHasErrors(true);
          setIsLoading(false)
        }
    }

    return (
      <div className="p-4">
        <SearchHotels findHotels={findHotels} />
          {isLoading ? (
            <div className="card col-md-6 offset-md-3 text-warning lead font-weight-bold J text-center p-2">
              Loading ... Please wait
              <div class="d-flex justify-content-center"> 
                <div className="spinner-border" role="status">
                  <span className="visually-hidden text-center" loading={isLoading}> Loading...</span>
                </div>
              </div>
            </div>
          ) : (
          <>
          {hotels.data ? ( 
           <div className='text-light'> 
            {hotels.data.length === 0 ? (
              <p className="card p-2 bg-danger lead font-weight-bold col-md-8 offset-md-2 text-center">
              Sorry, there are {hotels.data.length} hotel results! {hasErrors} </p>
            ) : ''}
            {hotels.data.map(hotel => (
            <HotelDetail
            key={hotel.hotel.hotelId} hotel={hotel} />
            ))}   
           </div>
          ) : (
           <>
           {hasErrors && 
           <Alert show={show} variant="dark" className="bg-danger lead font-weight-bold text-center col-md-8 offset-md-2 p-2"> 
            <div className="fade show">
             <p> Sorry, no results were found!</p>
            </div>
           </Alert>}
          </>
         )} 
        <br/> 
        </>
      )}
    </div>
  )
}

export default AddHotel;
