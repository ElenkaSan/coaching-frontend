import React, { useState, useEffect} from "react";
import AddItemForm from "./AddItemForm";
import Item from "./Item";
import { Card, CardHeader, CardBody } from "reactstrap";
import "./item.css";

const PackingList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if ( localStorage.getItem("items")){
      setItems(JSON.parse(localStorage.getItem("items")));
  }
  },[]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  let hours = 120; // 120 - 5 days 
  // to clear the localStorage after 5 days
  let now = new Date().getTime();
  let setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
     localStorage.setItem('setupTime', now)
  } else {
  if(now-setupTime > hours*60*60*1000) {
    localStorage.clear()
    localStorage.setItem('setupTime', now);
    }
  }

  
  const addTodo = todo => {
   if(!todo.text || /^\s*$/.test(todo.text)) {
    return
   }
   const newTodos = [todo, ...items]
   setItems(newTodos)
  //  console.log(...items)
  }

  const updateItem = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return
     }
     setItems(prev => prev.map(item => item.id === todoId ? newValue : item))
  }

  const removeItem = id => {
    const removeArr = [...items].filter(todo => todo.id !== id)

    setItems(removeArr)
  }

  const completeItem = id => {
    let updateTodo = items.map(todo=> {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setItems(updateTodo)
  }

  return (
    <Card className="bg-transparent border-warning">
      <CardHeader className="border-warning text-center text-info T lead countdown-header">Packing List</CardHeader>
      <CardBody className="item-list">
        <br></br>
        <AddItemForm onSubmit={addTodo} />
        <Item  items={items} completeItem={completeItem} removeItem={removeItem} updateItem={updateItem}/>
      </CardBody>
    </Card>
  );
};

export default PackingList;