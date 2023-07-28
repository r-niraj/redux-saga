import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData=(data=[], action)=>{
    console.log(data)
    switch(action.type){
        case ADD_TO_CART:
            console.log("Added to cart case exe from reducer");
            return [...data, action.payload];
        case REMOVE_FROM_CART:
<<<<<<< HEAD
            const remainingItem = [data.filter(item=>item.id!==action.payload)]
=======
            const remainingItem = data.filter(item=>item.id!==action.payload)
>>>>>>> f6804e7 (UI change)
            return [...remainingItem];
        case EMPTY_CART:
            console.log("Empty Cart case exe from reducer");
            data= [];
            return [...data];
        default:
            return data;
    }
}