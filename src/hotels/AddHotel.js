import React, { 
  useContext,
   useState } from "react";
// import { Link } from "react-router-dom";
import Api from "../api";
import AmadeusApi from "../amadeusApi";
import UserContext from "../auth/UserContext";
import HotelDetail from "./HotelDetail";
// import HotelCard from "./HotelCard";
import SearchHotels from "./SearchHotels";
import LoadingSpinner from "../common/LoadingSpinner";
import Alert from 'react-bootstrap/Alert'
import '../flights/flight.css'
import "toasted-notes/src/styles.css";
// import useLocalStorage from "../hooks/useLocalStorage";


//AddHotel component renders all hotels that are in the Api Amadeus.
//  app backend database. 
//A user can filter using the inputs in the child component "SearchHotels".
//A user can also click on a button to safe hotel such as remove this hotel.
//If a user has saved, the hotel info card will show it has been saved to and will show the remove button.

const AddHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [show, setShow] = useState(true);
    const [hasErrors, setHasErrors] = useState(false);
    const [offerId, setOfferId] = useState(null);

    // const [trip, setTrip] = useLocalStorage(null);
    const [trip, setTrip] = useState([]);
    const [tripId, setTripId] = useState(new Set([]));
    const { isLoggedIn } = useContext(UserContext);

    //upon initial load, show all hotels for the choosen dates.
    const findHotels = async (formData) => {
        try {
            let res = await AmadeusApi.getHotelByCity(
                                                         formData.cityCode, 
                                                         formData.checkInDate,
                                                         formData.checkOutDate
                                                         );
            console.log("Hotels", res)
            if (res.message === "success") {
              return res.json();
            }
            else {
              setHasErrors(true);
            }
            setHotels(res);
          }
         catch (e) {
          console.error(e.message);
          setShow(true);
          setHasErrors(true);
        }
    }

  
    if (!hotels) return <LoadingSpinner />;
    
    return (
      <div className="p-4">
            <SearchHotels findHotels={findHotels} />
        {hotels.data ? ( 
        <div className='text-light'> 
        {hotels.data.length === 0 ? ( <p className="card p-2 bg-danger lead font-weight-bold col-md-8 offset-md-2 text-center">
         Sorry, there are {hotels.data.length} hotel results! </p>) : ''}
        {hotels.data.map((hotel) => (
          <HotelDetail
           key={hotel.hotel.hotelId.toString()} hotel={hotel} 
          />
          ))}   
        </div>
      ) : (
        <>
         {hasErrors
                  ?
                  ( <>
                    <Alert show={show} variant="dark" className="bg-danger lead font-weight-bold text-center col-md-8 offset-md-2 p-2"> 
                      <div className="fade show">
                      <p> Sorry, no results were found!</p>
                      </div>
                    </Alert>
                  </> )
                  : null}
                  </>
        )} 
        <br/> 
        </div>
    )
}

export default AddHotel;
