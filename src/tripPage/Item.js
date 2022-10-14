import React, {useState} from "react";
import AddItemForm from './AddItemForm'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';

const Item = ({items, completeItem, removeItem, updateItem }) => {
    const [edit, setEdit] = useState({
        id: null,
        valur: ''
    })

    const submitUpdate = value => {
        updateItem(edit.id, value)
        setEdit({
            id: null,
            valur: ''
        })
    }

    if(edit.id){
         return <AddItemForm edit={edit} onSubmit={submitUpdate} />
    }

  return items.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeItem(todo.id)}>
        <h4 className="mb-1">{todo.text}</h4>
        </div>
        <div className="icons">
            <AiFillCloseCircle 
            onClick={() => removeItem(todo.id)} className="delete-icon"
            />
            <AiFillEdit 
            onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit-icon"
            />
            </div>
    </div>
  ));
};

export default Item;