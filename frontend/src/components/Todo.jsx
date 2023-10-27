import React from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions/index"
import {useDispatch} from "react-redux"

//to store editing state
import { useState } from "react";

const Todo = ({ todo }) => {

  const dispatch = useDispatch();

  const [edit,setEdit] = useState(false);

  //to set data on edit input field
  const [text,setText] = useState(todo.data);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setEdit(edit => !edit);
    dispatch(updateTodo(todo._id, text));
  }

  return (
    
    <li
        className="task"
        // onClick={()=>toggleTodo(todo._id)}
        onClick={()=>dispatch(toggleTodo(todo._id))}
        style={{
          textDecoration: todo.done? 'line-through' : '' ,
          color: todo.done ? '#bdc3c7' : '#34495e'
        }}
      >
      <span style={{display : edit ? "none" : ""}}>{todo.data}</span>

      <form style={{display : edit ? "inline" : "none"}} onSubmit={handleSubmit} >
        <input className="edit-todo " type="text"  value={text} onChange={(e)=> setText(e.target.value)}/>
      </form>

      <span className="icon" onClick={()=> dispatch(deleteTodo(todo._id))} >
        <i className="fas fa-trash"></i>
      </span>

      <span className="icon" onClick={()=> setEdit(edit => !edit)} >
        <i className="fas fa-pen"></i>
      </span>
    </li>
  );
};

export default Todo;
