import { createStore } from 'redux';

const initialState = {
    userToken: ''
}

const authReducer = (state=initialState, action) => {
    if (action.type === 'auth/login'){
        return { ...state, userToken: action.payload.access}
    }
    if (action.type === "setToken") {
        const newState = {...state};
        newState.userToken = action.payload;
        return newState;
    }
    if (action.type === "setRestaurant") {
        const newState = {...state};
        newState.restaurant = action.payload;
        return newState;
    }
    return state
}


const rootReducer = (state, action) => {
    if (action.type === "USER_LOGOUT") {
        return authReducer(undefined, action)
    }
    return authReducer(state, action)
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
