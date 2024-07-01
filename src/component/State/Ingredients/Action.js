import { API_URL, api } from '../../../config/api';
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from './ActionTypes';

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get('/api/admin/ingredients/restaurant/${id}', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }

            });
            console.log('Response from getting ingredients of restaurant', response.data);
            dispatch({
                type: 'GET_INGREDIENTS',
                payload: response.data
            });
        } catch (error) {
            console.log('Error while getting ingredients of restaurant', error);

        }
    }
}
export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post('/api/admin/ingredients', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('Response from creating ingredient', response.data);
            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.log('Error while creating ingredient', error);
        }
    }
}
export const createIngredientCategory = ({ data, jwt }) => {
    console.log('Data from createIngredientCategory', data);
    return async (dispatch) => {
        try {
            const response = await api.post('/api/admin/ingredients/categories', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('Response from creating ingredient category', response.data);
            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.log('Error while creating ingredient category', error);
        }
    }
}
export const getIngredientCategories = ({ id,jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/${id}/categories/`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('Response from getting ingredient categories', response.data);
            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.log('Error while getting ingredient categories', error);
        }
    }
}
export const updateStockOfIngredient=({id,jwt})=>{
    return async(dispatch)=>{
        try{
            const {data}=await api.put(`/api/admin/ingredients/${id}/stock`,{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({
                type:UPDATE_STOCK,
                payload:data
            });
            console.log('Response from updating stock of ingredient',response.data);
        }
        catch(error){
            console.log('Error while updating stock of ingredient',error);
        }
    }
}
