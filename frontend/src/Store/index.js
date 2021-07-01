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
        
        case "setRestaurant":
            return {
                ...state, 
                restaurant: action.payload 
            };
        case "setReview":
            return {
                ...state, 
                review: action.payload 
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
             
    


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;
