import React from 'react'
//import getAllTodos api here and load all todos with useEffect
import {deleteTodo, getAllTodos} from '../redux/actions/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//to fetch data from redux and show on frontend, jo backend se aya hai from "dispatch(getAllTodos());"
import { useSelector } from 'react-redux'
import Todo from './Todo'
import Tabs from './Tabs'
import { ALL_TODOS,DONE_TODOS,ACTIVE_TODOS } from '../redux/actions/type'

const Todos = () => {

    const dispatch  = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos());
    },[]);

    const todos = useSelector(state => state.todos) //fetching all todos from redux 
    // const allTodos = todos.map(todo => (
    //     // <li key={item._id} >{item.data}</li>
    //     <Todo 
    //         key={todo._id}
    //         todo={todo}
    //     />        
    // ))
    
    const currentTab = useSelector(state => state.currentTab);

    const getTodos = ()=>{
        if(currentTab === ALL_TODOS){
            return todos;
        }
        else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done);
        }
        else if(currentTab === DONE_TODOS){
            return todos.filter(todo => todo.done);
        }
    }

    const allTodos = getTodos().map(todo => (
        // <li key={item._id} >{item.data}</li>
        <Todo 
            key={todo._id}
            todo={todo}
        />        
    ))

    const removeDoneTodos = () =>{
        //forEach only llops an array while map loops and return an array
        todos.forEach(todo => {
            if(todo.done){
                dispatch(deleteTodo(todo._id))
            }
        })
    }

  return (
    <article>
        <div>
            <Tabs currentTab={currentTab} />
            {
                todos.some(todo => todo.done) ? <button className='button clear' onClick={removeDoneTodos}>Remove Done Todos</button>:null
            }
        </div>
        <ul>
            {allTodos}
        </ul>
    </article>
  )
}
export default Todos