import React, { useState, useEffect } from "react";
// import { Form, Button }  from "reactstrap";
import Timers from "./Timers";
import { AiFillCloseCircle } from 'react-icons/ai';

const EventCountdown = ({ data, id, onDelete }) => {
  
  const INITIAL_STATE = {
    months: "0",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  }
  const [timer, settimer] = useState(INITIAL_STATE);

  const state = null;
//   ((((months === days) === hours) === minutes) === seconds) === 0;

  const [timeUp, setTimeUp] = useState(state);


  const [eventInfo, seteventInfo] = useState({
    name: "",
    date: "",
  });
  const { months, days, hours, minutes, seconds } = timer;
 
  const formatNum = (num) => (num < 10 ? `0${num}` : num);

  const calculateTimeLeft = () => {
    const timeLeft = +new Date(eventInfo.date) - new Date();
    return {
      months: Math.floor(timeLeft / (24 * 60 * 60 * 1000) / 30),
      days: Math.floor(timeLeft / (24 * 60 * 60 * 1000)),
      hours: Math.floor((timeLeft / (60 * 60 * 1000)) % 24),
      minutes: Math.floor((timeLeft / (60 * 1000)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  useEffect(() => {
    seteventInfo(data);
    if(timer.seconds === -1){
    // ((((months === days) === hours) === minutes) === seconds) === 0;
     setTimeUp(true);
    }
  }, [data, timer]);

  useEffect(() => {
    const countdown = setTimeout(() => {
      settimer(calculateTimeLeft());
    }, 1000);
    //clear timer upon unmounting
    return () => clearTimeout(countdown);
  });

const handleClick = () => {
    onDelete(id);
}

  return (
    <div className="mb-1">
      {!timeUp ? (
        <div>
          <p className="text-white todo-row">{eventInfo.name}
          <AiFillCloseCircle onClick={handleClick} className="delete-icon"
            />
            </p> 
          <Timers
            months={formatNum(months)}
            days={formatNum(days)}
            hours={formatNum(hours)}
            minutes={formatNum(minutes)}
            seconds={formatNum(seconds)}
          />
          </div>) : timeUp}
          {timeUp && 
          ( 
            <h2 className="text-white todo-row" id="countdown-num">
              Hooray! Time to party, the {eventInfo.name} is here!
              <AiFillCloseCircle onClick={handleClick} className="delete-icon"
            />
            </h2>
           )} 
          <hr></hr>
         
    </div>
  );
};

export default EventCountdown;