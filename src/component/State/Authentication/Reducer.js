import {
    ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST,
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS
} from "./ActionTypes"

import { isPresentInFavorites } from "../../config/logic"

const initialState = {
    user: null,
    isLoading: null,
    error: null,
    jwt: null,
    favorites: [],
    success: null,
    apiError: null,

}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return { ...state, isLoading: true, error: null, success: null }
        //Setting isLoading to true allows the application's UI to 
        //reflect that an operation is in progress. For example, the UI might display a 
        //loading spinner or disable certain buttons to prevent duplicate requests.
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, jwt: action.payload, success: "Register Success" }
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload, favorites: action.payload.favorites }

        case ADD_TO_FAVORITE_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInFavorites(state.favorites, action.payload)
                    //If the restaurant is already in the favorites array,
                    //it is removed from the array. Otherwise, it is added to the array.
                    ? state.favorite.filter(item => item.id !== action.payload.id)
                    : [...state.favorite, action.payload]
            }
        case LOGOUT:
            return initialState;
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return { ...state, isLoading: false, error: action.payload, success: null }
       
        default:
            return state;
    }
}