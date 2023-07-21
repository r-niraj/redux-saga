import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData=(data=[], action)=>{
    switch(action.type){
        case ADD_TO_CART:
            console.log("Added to cart case exe from reducer");
            return [...data, action.payload];
        case REMOVE_FROM_CART:
            debugger
            let copyData = [...data];
            copyData.pop();
            return [...copyData];
        case EMPTY_CART:
            console.log("Empty Cart case exe from reducer");
            data= [];
            return [...data];
        default:
            return data;
    }
}