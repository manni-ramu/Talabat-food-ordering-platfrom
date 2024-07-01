export const isPresentInFavorites = (favorites,restaurant)=>{
    favorites=favorites||[];
    for(let item of favorites){
        if(item.id===restaurant.id){
            return true;
        }
    }
    return false;

}