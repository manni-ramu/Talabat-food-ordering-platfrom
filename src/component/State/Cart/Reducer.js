
import * as actionTypes from "./ActionTypes";
import { LOGOUT } from '../Authentication/ActionTypes';

const initialState = {
    cart: null,
    cartItems: [],
    loading: false,
    error: null,
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CARTITEM_REQUEST:
        case actionTypes.REMOVE_CARTITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.FIND_CART_SUCCESS:
        case actionTypes.CLEARE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                loading: false,
                cartItems: action.payload.cartItems,
            };
        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [...state.cartItems, action.payload],
            };
        case actionTypes.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                }
                ),
            };
        case actionTypes.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };
        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.UPDATE_CARTITEM_FAILURE:
        case actionTypes.REMOVE_CARTITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGOUT:
        localStorage.removeItem("jwt");
        return {
            ...state,
            cart: null,
            cartItems: [],
            success:"logout success"
        };
        default:
            return state;
    }
};
export default cartReducer;