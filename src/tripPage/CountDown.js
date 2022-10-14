import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import DateInput from "./DateInput";
import "./CountDown.css";

const CountDown = props => {
  // const [date, setDate] = useState("");
  const [date, setDate] = useState([]);
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    if ( localStorage.getItem("date")){
      setDate(JSON.parse(localStorage.getItem("date")));
  }
  },[]);

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(date));
  }, [date]);

  const dateCountDown = date;

  const handleInputChange = event => {
    setDate(event);
    setDelay(event);
  };

  useEffect(() => {
    // if(props.tripId){
    //   Axios.get(`/getdate/${props.tripId}`).then(res => {
    //     setDate(res.data.date);
    //   });
    // }
    
    // Update the count down every 1 second
    const x = setInterval(
      function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Set the date we're counting down to
        const tripDate = Date.parse(dateCountDown);

        // Find the distance between now and the count down date
        const distance = tripDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (!distance) {
          document.getElementById("countdown-num").innerHTML = "0d 0h 0m 0s";
        } else if (document.getElementById("countdown-num") !== null) {
          document.getElementById("countdown-num").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

          // If the count down is finished, display text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-num").innerHTML =
              "Time to party";
          }
        }
      },
      1000,
      delay
    );
    return () => clearInterval(x);
  });

  return (
    <div>
      <Card className="T countdown-card bg-transparent border-info text-warning">
        <CardHeader className="countdown-header border-info">Count Down Your Trip</CardHeader>
        <CardBody>
          <Row>
            <Col lg={6}>
              <h5 className="start-date-text">Vacation Start Date:</h5> 
              {/* <p className="card date-change-input"> <MemoCountdown  tripId={props.tripId} /> </p> */}
              <DateInput 
                // setCount={count}
                tripId={props.tripId}
                handleInputChange={handleInputChange}
                date={date}
              />
            </Col>
            <Col lg={6}>
              <h5 className="countdown-text">Days Until Trip:</h5>
              <p id="countdown-num"></p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}; 

export default CountDown;