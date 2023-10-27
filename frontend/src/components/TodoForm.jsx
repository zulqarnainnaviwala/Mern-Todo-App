import React, { useState } from "react";
// import { addNewTodo } from "../redux/actions/index.jsx";
import { addNewTodo } from "../redux/actions/index";

import {useDispatch} from 'react-redux'


const TodoForm = () => {

    const [text,setText] = useState("");
    const dispatch =  useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault();
      // addNewTodo(); // aese nh krengy q k humredux use krhy hain to humen apny actions dispatch krny hoty hai 
      dispatch(addNewTodo(text));
      setText("")

    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }

    return (
    <form className="form" onSubmit={handleSubmit} >
      <input 
        type="text"
        placeholder="Enter new todo..."
        className="input" 
        onChange={handleChange}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
