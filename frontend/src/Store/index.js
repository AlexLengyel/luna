import { createStore } from 'redux';
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
    userToken: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "auth/login":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.access,
            };
        case "setToken":
            return {
                ...state, 
                token: action.payload 
            };

        case "registration_email":
                return { 
                ...state, 
                confirmationEmail: action.payload
            };

        default:
            return state;
    }
}
             
    
  
/* const authReducer = (state=initialState, action) => {
    if (action.type === 'auth/login'){
        return { ...state, userToken: action.payload.access}
    }
    if (action.type === "setToken") {
        const newState = {...state};
        newState.userToken = action.payload;
        return newState;
    }
    return state
}


const rootReducer = (state, action) => {
    if (action.type === "USER_LOGOUT") {
        return authReducer(undefined, action)
    }
    return authReducer(state, action)
} */

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;