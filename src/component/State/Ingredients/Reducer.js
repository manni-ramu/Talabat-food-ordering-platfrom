import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionTypes"

const intialState = {
    ingredients: [],
    category: [],
    update:null,

}
export const  ingredientReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            }
        case UPDATE_STOCK:
            return {
                ...state,
                update: action.payload,
                ingredients: state.ingredients.map((ingredient) => {
                    if (ingredient.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return ingredient;
                    }
                })
            }
        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                category: [...state.category, action.payload]
            }
        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}
