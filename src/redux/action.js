import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
export const addToCart = (payload) =>{
    console.log("action add to cart called");
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) =>{
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const emptyCart = () =>{
    console.log("action empty cart called");
    return {
        type: EMPTY_CART,
    }
}