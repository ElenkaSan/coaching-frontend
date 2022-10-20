import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Input } from "reactstrap";


const AddItemForm = (props) => {
  const [value, setValue] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange= e => {
    setValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: value
    })
    setValue("");
  };



  return (
    <Form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ?
         (<>
         <Input
        type="text"
        placeholder="Update Your Todo"
        className="input num"
        value={value}
        onChange={handleChange}
        ref={inputRef}
      />
      <br></br>
      <Button className="btn btn-warning">
        Update Todo
      </Button> </>) : 
      (<>
      <Input
        type="text"
        placeholder="Add a Todo"
        className="input num"
        value={value}
        onChange={handleChange}
        ref={inputRef}
      />
      <br></br>
      <Button className="bg-info float-right text-dark">
        Add Todo
      </Button>
      <br></br>
      </>)
      }
    </Form>
  );
};

export default AddItemForm;