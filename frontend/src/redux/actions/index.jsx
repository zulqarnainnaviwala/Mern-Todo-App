//yhn pr humen sari apis call krni hai 
// different methods hain , javascript ka request method jo ab depricate hogya hai , usky ilawa patch function ki help se api call krsaklty hain  ya phr ek external package hai axios wo bhi use kr sakty 

//by axios 
import axios from 'axios';

import {ADD_NEW_TODO , GET_ALL_TODO , TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB} from './type'

const backendUrl = "http://localhost:8000"

//using middleware "=> async (dispatch)" , we are using thunk so we have access to dispatch here too 
export const addNewTodo = (data) => async (dispatch) =>{

    try{
        const res = await axios.post(`${backendUrl}/todos`, { data } );
        //dispatch me object jata or usmy do chezen -- type, payload
        dispatch({type: ADD_NEW_TODO , payload:res.data })

    } catch(error){
        console.log('error while calling addNewTodo api ', error.message);
    }
}

export const getAllTodos = () => async (dispatch) =>{

    try{
        const res = await axios.get(`${backendUrl}/todos`);
        dispatch({type: GET_ALL_TODO , payload:res.data })
        
    } catch(error){
        console.log('error while calling getAllTodos api ', error.message);
    }
}


export const toggleTodo = (id) => async (dispatch) =>{
    try{
        const res = await axios.get(`${backendUrl}/todos/${id}`);
        dispatch({type: TOGGLE_TODO , payload:res.data })
        
    } catch(error){
        console.log('error while calling toggleTodo api ', error.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) =>{
    try{
        const res = await axios.put(`${backendUrl}/todos/${id}`, {data});
        dispatch({type: UPDATE_TODO , payload:res.data })
        
    } catch(error){
        console.log('error while calling updateTodo api ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) =>{
    try{
        const res = await axios.delete(`${backendUrl}/todos/${id}`);
        dispatch({type: DELETE_TODO , payload:res.data })
        
    } catch(error){
        console.log('error while calling deleteTodo api ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) =>{
    try{
        await dispatch({type: TOGGLE_TAB , selected:tab })
        
    } catch(error){
        console.log('error while calling toggleTab api ', error.message);
    }
}