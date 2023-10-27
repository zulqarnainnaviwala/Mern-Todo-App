
import * as actionTypes from '../actions/type'

//reducer me do chezen milti hain  one state (having previous value) second action (have an object received from dispatch in api)
export const todosReducer = (state = [], action) => { 
    switch(action.type){
        case actionTypes.ADD_NEW_TODO:
            return [action.payload, ...state]
        case actionTypes.GET_ALL_TODO:
            // return [action.payload, ...state] //no need for ...state to avoid duplication
            return action.payload
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, done:!todo.done } : todo
            ))

        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, data:action.payload.data} : todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id); //sirf wohi todo agay bhejo jo ID se match nh krta (mtlb jo todo delete kia hai wo remove krna hai frontend se)
        default:
            return state;
    }
}

