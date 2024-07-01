import {GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";

const initialState={
    orders:[],
    loading:false,
    error:null,
}
export const orderReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case GET_USERS_ORDERS_REQUEST:
            return {...state, loading:true, error:null};
        case GET_USERS_ORDERS_SUCCESS: 
            return {...state, error:null, loading:false, orders:payload};
        case GET_USERS_ORDERS_FAILURE:
            return  {...state, loading:false, error:payload};
        default:
            return state;
    }
};

export default orderReducer;

