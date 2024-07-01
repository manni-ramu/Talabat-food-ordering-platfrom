export const categorizeIngredients = (ingredients) =>{
    const categorizedIngredients = ingredients.reduce((acc, item) => {
        if(acc[item.category]){
            acc[item.category].push(item.ingredients)
        }else{
            acc[item.category] = [item.ingredients]
        }
        return acc;
    },{})
    return categorizedIngredients;
}