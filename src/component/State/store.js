import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import orderReducer from "./Order/Reducer";
import restaurantOrderReducer from "./Restaurant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantOrderReducer,
    ingredients: ingredientReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
//The store is where the application's state lives. The rootReducer 
//is passed as the first argument to define how the state is updated based on actions. 
//The second argument, applyMiddleware(thunk), adds the thunk middleware to the store. 
//This allows action 
//creators to return functions (for asynchronous actions) instead of just actions.

