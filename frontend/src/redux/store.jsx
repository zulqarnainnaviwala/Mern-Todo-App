// that line-throungh indicates depreciation ,latest alternate is redux toolkit
import {applyMiddleware, combineReducers, createStore } from 'redux';

//to sync with browser's extension
import { composeWithDevTools } from 'redux-devtools-extension'

// using famous middle ware to use 
import thunk from 'redux-thunk'

//importing reducers
import { todosReducer } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

//passing thunk in an middleware array
const middleWare = [thunk];

//if there are more than one reducers then we need to use conbine reducers function
const reducer = combineReducers({
    todos: todosReducer,
    currentTab: tabReducer  
})

// create store is a function which takes to argumets (reducer, middleware-if any) 
// createStore(
//     reducer,
//     // applyMiddleware(...middleWare) //if we need to sync with redux devtool extension on chrome than install package and pass in composeWithDecTools function
//     composeWithDecTools(applyMiddleware(...middleWare))
// )

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
//importany note:
//ab is store ko import krna hai "main.jsx" me , or ye sara kam "redux" se huwa hai , whn Provider k liye "react-redux" install krna hai taky is redux store ko wrap kr saken
