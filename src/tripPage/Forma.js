

import React from 'react';
import { Form, Button, Input, Row, Col } from "reactstrap";


const Forma = ({name, onFormSubmit, date, onInputChange, warning}) => {
    return (
      <div>
        <Form onSubmit={onFormSubmit} className="grid grid-cols-1">
        <Row>
        <Col lg={6}>
        <label className="start-date-text lead text-info">Enter Event Name</label>
        <Input
         id="countdown-num" 
         placeholder="Enter Event Name"
         className="text-dark" 
         autoComplete="off" 
         required value={name} 
         name='name' 
         onChange={onInputChange} />
          </Col>
            <Col lg={6}>
        <label className="start-date-text lead text-info">Enter Date</label>
        <Input  
          id="countdown-num" 
          className="text-dark" 
          required type="datetime-local" 
          value={date}
          name='date' 
          onChange={onInputChange}/>
        {warning && <label className="text-sm text-yellow-200">Please enter correct date.</label>}
        <Button className="my-3 bg-info" type="submit">Start</Button>
        </Col>
        </Row>
       </Form>
       <hr className="border-1 mx-2 my-10 border-gray-200 "></hr>
      </div>
    )
}


export default Forma;