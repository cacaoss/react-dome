import {createStore, applyMiddleware, combineReducers} from "redux"
//import {createStore, applyMiddleware, combineReducers} from "../kredux";
import logger from "redux-logger"

const initCountState = {
    count: 0
}

function countReducer(state, action) {
    if (typeof state === 'undefined') {
        state = initCountState
    }

    switch (action.type) {
        case "ADD":
            return {...state, count: state.count + 1}
        case "MINUS":
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}

const initRegistState = {
    username:"",
    password:""
}

function registReducer(state = {}, action) {
    if (typeof state === 'undefined') {
        state = initRegistState
    }

    switch (action.type) {
        case "NAME":
            return {...state, username: action.payload};
        case "PWD":
            return {...state, password: action.payload};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    countState: countReducer,
    registState: registReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
store.dispatch({type: "ZZH"})

export default store;
