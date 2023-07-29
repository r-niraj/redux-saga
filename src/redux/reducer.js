import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData=(data=[], action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return [...data, action.payload];
        case REMOVE_FROM_CART:
            const remainingItem = data.filter(item=>item.id!==action.payload)
            return [...remainingItem];
        case EMPTY_CART:
            data= [];
            return [...data];
        default:
            return data;
    }
}