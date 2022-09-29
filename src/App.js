import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";

import LoadingSpinner from "./common/LoadingSpinner";
import Api from "./api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";
import AmadeusApi from "./amadeusApi";
require("dotenv").config();


// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "vacation-token";

// App script provides the initial rendering of children components. 
// Uopon initial rendering, we check to see if the user has a token in the browser session.
// We decrypt the token and use the data to rerender the user's session.
// If not, we ask the user to login or signup and cannot proceed until one of these actions is completed. 
// Upon successful login/signup, user data will be saved to global variable of "USER"
// If not successful, we will send back the errors for it to be displayed on child component.

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [trip, setTrip] = useLocalStorage(true);


  console.debug(
    "App",
    "infoLoaded=",
    infoLoaded,
    "isLoggedIn=",
    isLoggedIn,
    "token=",
    token
  );

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.
  //On load: if token exists in local storage, persist on site.
  //--get token, decrypt it, and then save data to USER state.
  // If error, send back errors to the console..

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);
      AmadeusApi.clientId = process.env.AMADEUS_CLIENT_ID;
      AmadeusApi.clientSecret = process.env.AMADEUS_CLIENT_SECRET;

      async function getUserProfile() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            Api.token = token;
            let isLoggedIn = await Api.getUserProfile(username);
            setIsLoggedIn(isLoggedIn);
            setApplicationIds(new Set(isLoggedIn.applications));
          } catch (err) {
            console.error(err);
            setIsLoggedIn(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getUserProfile();
    },
    [token]
  );

   //We register users with this function to Api, which posts to the backend.
  //If successful, save USER with data, save new token, and return success message. 
  //IF unsucessful, return errors. 

  const signup = async (signupData) => {
    try {
      let token = await Api.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: err };
    }
  };

   //Login User gives the user the ability to login. Data is checked on APi to the backend.
  //If successful, save USER with data, save new token, and return success message. 
  //IF unsucessful, return errors. 

  const login = async (loginData) => {
    try {
      let token = await Api.login(loginData);
      setToken(token);
      console.error(token);
      return [true, token.message ];
    } catch (err)
     {
      console.error(err);
      return [false, err.message];
    }
  };


  //Logout will reset the session token to null for the user and will remove their data from the app instance.

  const logout = () => {
    setIsLoggedIn(null);
    setToken(null);
  };

 //Users can update their profile with this function, which posts to the back end on Api call.
  //If successful, save USER with data and return success message. 
  //IF unsucessful, return errors. 
  async function updateCurrentUser() {
    try {
      let token = await Api.getUserProfile(isLoggedIn.username);
      setApplicationIds(new Set(isLoggedIn.applications));
      updateUser(token);
      // findTripByUser(isLoggedIn.username)
      return { success: true };
    } catch (err) {
      console.error(err);
      setIsLoggedIn(null);
      return [false, err.message];
    }
  }

  const updateUser = (newUser) => {
    setIsLoggedIn(newUser);
  };


  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          isLoggedIn,
          updateUser,
          setIsLoggedIn,
          updateCurrentUser,
          applicationIds,
          // findTripByUser,
          // addNewTrip
        }}
      >
        <div className="App">
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} 
          // updateUser={updateUser} 
          // addNewTrip={addNewTrip}
          />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

//   // Add / remove Flight 
//   static async addingFlight(username, flight_info, flightId) {
//     // flight_info- create flight inside flight table

// // const preCheck = await db.query(
// //       `SELECT id
// //        FROM flightReservations
// //        WHERE id = $1`, [flightId]);
// // const flight = preCheck.rows[0];
// // if (!flight) throw new NotFoundError(`No flight: ${flightId}`);

// const preCheck1 = await db.query(
//   `SELECT username
//    FROM users
//    WHERE username = $1`, [username]);
// const user = preCheck1.rows[0];
// if (!user) throw new NotFoundError(`No username: ${username}`);

// //  create flight ALL first 
// const preCheck2 = await db.query(
// `SELECT flightReservations
//  FROM flightReservations
//  WHERE numberOfPassengers = $1,
//        location_departure = $2,
//        location_arrival = $3,
//        departureDate = $4,
//        returnDate = $5,
//        price = $6,
//        currency $7`, [flight_info]);
// const flight_in = preCheck2.rows[0];
// if (!flight_in) throw new NotFoundError(`No flight add: ${flight_info}`);

// //  then get id - !
// //  then connect  
// // id 
// // numberOfPassengers  
// // location_departure 
// // location_arrival 
// // departureDate
// // returnDate
// // price 
// // currency 

// await db.query(
//       `INSERT INTO trips (flightReservation_id, username)
//       VALUES ($1, $2)`,
//       [flightId, username]);
// }

// static async removeFlight(username, flightId) {
// const preCheck = await db.query(
//     `SELECT id
//      FROM flightReservations
//      WHERE id = $1`, [flightId]);
// const flight = preCheck.rows[0];
// if (!flight) throw new NotFoundError(`No flight: ${flightId}`);

// const preCheck2 = await db.query(
//     `SELECT username
//      FROM users
//      WHERE username = $1`, [username]);
// const user = preCheck2.rows[0];
// if (!user) throw new NotFoundError(`No username: ${username}`);

// const preCheck3 = await db.query(
//     `SELECT username, flightReservation_id 
//      FROM trips
//      WHERE username = $1 and 
//            flightReservation_id = $2`, [username, flightId]);
// const trips = preCheck3.rows[0];
// if (!trips) throw new NotFoundError(`No trips with flight found: ${username}, ${flightId}`);

// await db.query(
//     `DELETE FROM trips 
//      WHERE username = $1 and 
//            flightReservation_id = $2`, [username, flightId]);
// return true;
// }

// // Add / remove hotel
// static async addingHotel(username, hotel_info) {
// // create hotel ALL first 
//  //  then get id - !
//  //  then connect  
// const preCheck = await db.query(
//   `INSERT INTO hotelReservations AS "hotel_info" (id, 
//                                       hotelName,
//                                       roomType,
//                                       checkInDate,
//                                       checkOutDate,
//                                       numberOfGuests,
//                                       roomsNumber,
//                                       price,
//                                       currency)
//        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [id, 
//         hotelName,
//         roomType,
//         checkInDate,
//         checkOutDate,
//         numberOfGuests,
//         roomsNumber,
//         price,
//         currency]);
//   const hotel_in = preCheck.rows[0];
//   if (!hotel_in) throw new NotFoundError(`No hotel add: ${id, 
//     hotelName,
//     roomType,
//     checkInDate,
//     checkOutDate,
//     numberOfGuests,
//     roomsNumber,
//     price,
//     currency}`);

// //    const preCheck2 = await db.query(
// //       `SELECT id
// //        FROM hotelReservations
// //        WHERE id = $1`, [hotelId]);
// // const hotel = preCheck2.rows[0];
// // if (!hotel) throw new NotFoundError(`No hotel: ${hotelId}`);
// // INSERT INTO trips AS t (id, username, flightReservation_id AS "flightId", hotelReservation_id AS "hotelId")

// const preCheck4 = await db.query(
//   `INSERT INTO t.hotelReservation_id AS "hotelId"
//    SELECT hotelName, roomType, checkInDate, checkOutDate, numberOfGuests, roomsNumber, price, currency
//    FROM hotelReservation AS "hotel_info"
//    WHERE t.hotelId = $1`, [hotel_info]);
// const hotels = preCheck4.rows[0];
//  if (!hotels) throw new NotFoundError(`No hotel_trip Table: ${hotel_info}`);

//  const preCheck2 = await db.query(
//   `SELECT t.hotelReservation_id AS "hotelId"
//    FROM trips AS t
//    WHERE t.hotelId = $1, t.username = $2`, [username, hotel_info]);
//   const hotel = preCheck2.rows[0];
//   if (!hotel) throw new NotFoundError(`No hotel hotel_info: ${hotel_info}`);

// //  const preCheck2 = await db.query(
// //   `SELECT t.hotelReservation_id AS "hotelId"
// //     FROM trips AS t
// //     WHERE t.username = $1`, [username]);
// //  user.trips = userTripRes.rows.map(t => t.hotelReservation_id);
// //  const hotel = preCheck2.rows[0];
// //  if (!hotel) throw new NotFoundError(`No trip Table: ${username}`);

// const preCheck1 = await db.query(
//   `SELECT username
//    FROM users
//    WHERE username = $1`, [username]);
// const user = preCheck1.rows[0];
// if (!user) throw new NotFoundError(`No username: ${username}`);

// await db.query(
//       `INSERT INTO trips (hotelReservation, username)
//       VALUES ($1, $2)`,
//       [hotel_info, username]);

// }




// static async removeHotel(username, hotelId) {
// const preCheck = await db.query(
//     `SELECT id
//      FROM hotelReservations
//      WHERE id = $1`, [hotelId]);
// const hotel = preCheck.rows[0];
// if (!hotel) throw new NotFoundError(`No hotel: ${hotelId}`);

// const preCheck2 = await db.query(
//     `SELECT username
//      FROM users
//      WHERE username = $1`, [username]);
// const user = preCheck2.rows[0];
// if (!user) throw new NotFoundError(`No username: ${username}`);

// const preCheck3 = await db.query(
//     `SELECT username, hotelReservation_id
//      FROM trips
//      WHERE username = $1 and 
//            hotelReservation_id = $2`, [username, hotelId]);
// const trips = preCheck3.rows[0];
// if (!trips) throw new NotFoundError(`No trips with hotel found: ${username}, ${hotelId}`);

// await db.query(
//     `DELETE FROM trips 
//      WHERE username = $1 and 
//            hotelReservation_id = $2`, [username, hotelId]);
// return true;
// }