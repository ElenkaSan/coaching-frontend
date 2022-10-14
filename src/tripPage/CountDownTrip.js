import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import Forma from "./Forma";
import EventCountdown from "./EventCountdown";
import "./CountDown.css";

const CountDownTrip = () => {
    const [eventList , setEventList] = useState([]);
    const [warning , setWarning] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    date: "",
  });

  useEffect(() => {
    if ( localStorage.getItem("eventList")){
      setEventList(JSON.parse(localStorage.getItem("eventList")));
  }
  },[]);

  useEffect(() => {
    localStorage.setItem("eventList", JSON.stringify(eventList));
  }, [eventList]);

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    if (new Date(event.date) >= new Date()){
    setEventList((prevValue) => [...prevValue, event])
    setWarning(false)
  } else {
    setWarning(true);    
  }
  setEvent({ name: "", date: ""});
    e.preventDefault();
  };


  const deleteEvent = (id) => {
    setEventList(prevEventList => {
      return prevEventList.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  
  return (
    <div className="container mx-auto">
         <Card className="T countdown-card bg-transparent border-info text-warning">
        <CardHeader className="countdown-header border-info">CountDown your Trip e.g. Flight time or other Events, Deadline </CardHeader>
        <CardBody>
          <Forma 
            onFormSubmit={onFormSubmit}
            name={event.name}
            onInputChange={onInputChange}
            date={event.date}
            warning={warning}
          />
         { eventList.map((items,i) => (
         <div key={i}>
         <EventCountdown data={items} id={i} onDelete={deleteEvent}/>
         </div>
         ))
         }
      </CardBody>
        </Card>
    </div>
  );
};

export default CountDownTrip;