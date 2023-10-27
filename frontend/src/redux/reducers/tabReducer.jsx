
import * as actionTypes from '../actions/type'

//reducer me do chezen milti hain  one state (having previous value) second action (have an object received from dispatch in api)
export const tabReducer = (state= actionTypes.ALL_TODOS, action) => { 
    switch(action.type){
        case actionTypes.TOGGLE_TAB:
            return action.selected
        
        default:
            return state;
    }
}

