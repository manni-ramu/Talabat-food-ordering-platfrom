
import { api } from '../../config/api';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_REQUEST } from './ActionTypes';

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST});
        try {
            const {data} = await api.post('/api/order', reqData.order,{
                Headers:{
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            // if(data.payment_url){
            //     window.location.href=data.payment_url;
            // }
            console.log("created order data",data);
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: CREATE_ORDER_FAILURE, payload: error});
        }
    }
};
export const getUserOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USERS_ORDERS_REQUEST});
        try{
            const {data} = await api.get('/api/order/user',{
                Headers:{
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("User Orders",data);
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data}); 
        } catch (error) {
            dispatch({type: CREATE_ORDER_FAILURE, payload: error});
        }
    }
}